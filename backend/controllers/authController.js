
import { getUserByToken, loginUser, registerUser } from '../services/authService.js';

function authToken(req) {
  const header = req.headers.authorization || '';
  return header.startsWith('Bearer ') ? header.slice(7) : '';
}

export async function register(req, res, next) {
  try {
    const result = await registerUser(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function login(req, res, next) {
  try {
    const result = await loginUser(req.body);
    res.json(result);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
}

export async function me(req, res, next) {
  try {
    const user = await getUserByToken(authToken(req));
    if (!user) return res.status(401).json({ error: 'Not authenticated' });
    res.json({ user });
  } catch (error) {
    next(error);
  }
}
