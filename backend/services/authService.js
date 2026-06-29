
import fs from 'fs/promises';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const USERS_FILE = path.join(__dirname, '..', 'data', 'users.json');
const sessions = new Map();

async function readUsers() {
  try {
    const data = await fs.readFile(USERS_FILE, 'utf-8');
    return JSON.parse(data || '[]');
  } catch (error) {
    if (error.code === 'ENOENT') return [];
    throw error;
  }
}

async function writeUsers(users) {
  await fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2));
}

function hashPassword(password, salt = crypto.randomBytes(16).toString('hex')) {
  const hash = crypto.pbkdf2Sync(password, salt, 100000, 64, 'sha512').toString('hex');
  return `${salt}:${hash}`;
}

function verifyPassword(password, stored) {
  const [salt, originalHash] = stored.split(':');
  const attemptedHash = hashPassword(password, salt).split(':')[1];
  return crypto.timingSafeEqual(Buffer.from(originalHash, 'hex'), Buffer.from(attemptedHash, 'hex'));
}

function sanitizeUser(user) {
  return { id: user.id, name: user.name, email: user.email, businessName: user.businessName || '', createdAt: user.createdAt };
}

export async function registerUser({ name, email, password, businessName }) {
  const cleanEmail = String(email || '').trim().toLowerCase();
  if (!name || !cleanEmail || !password) throw new Error('Name, email and password are required.');
  if (String(password).length < 6) throw new Error('Password must be at least 6 characters.');

  const users = await readUsers();
  if (users.some((user) => user.email === cleanEmail)) throw new Error('Email already registered.');

  const user = {
    id: crypto.randomUUID(),
    name: String(name).trim(),
    email: cleanEmail,
    businessName: String(businessName || '').trim(),
    passwordHash: hashPassword(String(password)),
    createdAt: new Date().toISOString()
  };
  users.push(user);
  await writeUsers(users);
  const token = crypto.randomBytes(32).toString('hex');
  sessions.set(token, user.id);
  return { user: sanitizeUser(user), token };
}

export async function loginUser({ email, password }) {
  const cleanEmail = String(email || '').trim().toLowerCase();
  const users = await readUsers();
  const user = users.find((item) => item.email === cleanEmail);
  if (!user || !verifyPassword(String(password || ''), user.passwordHash)) throw new Error('Invalid email or password.');
  const token = crypto.randomBytes(32).toString('hex');
  sessions.set(token, user.id);
  return { user: sanitizeUser(user), token };
}

export async function getUserByToken(token) {
  if (!token || !sessions.has(token)) return null;
  const userId = sessions.get(token);
  const users = await readUsers();
  const user = users.find((item) => item.id === userId);
  return user ? sanitizeUser(user) : null;
}
