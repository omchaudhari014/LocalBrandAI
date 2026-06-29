
import { useState } from 'react';
import { LogIn, UserPlus, Sparkles } from 'lucide-react';
import { login, register } from '../services/api.js';

export default function AuthCard({ onAuth }) {
  const [mode, setMode] = useState('login');
  const [form, setForm] = useState({ name: '', email: 'demo@localbrand.ai', password: 'demo123', businessName: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  function updateField(e) { setForm((prev) => ({ ...prev, [e.target.name]: e.target.value })); }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true); setError('');
    try {
      const data = mode === 'login' ? await login(form) : await register(form);
      localStorage.setItem('localbrandai_token', data.token);
      localStorage.setItem('localbrandai_user', JSON.stringify(data.user));
      onAuth(data.user);
    } catch (err) { setError(err.message); }
    finally { setLoading(false); }
  }

  return (
    <main className="auth-shell dark">
      <div className="auth-card glass-card">
        <div className="brand auth-brand"><div className="brand-icon"><Sparkles size={22}/></div><div><strong>LocalBrandAI</strong><small>AI Growth Strategist</small></div></div>
        <h1>{mode === 'login' ? 'Welcome back 👋' : 'Create your workspace 🚀'}</h1>
        <p className="muted">Login/register to generate campaigns, preview posters and track history.</p>
        <form onSubmit={handleSubmit} className="campaign-form">
          {mode === 'register' && <label>Name<input name="name" value={form.name} onChange={updateField} placeholder="Om Chaudhari" required /></label>}
          {mode === 'register' && <label>Business Name<input name="businessName" value={form.businessName} onChange={updateField} placeholder="Raj Fashion" /></label>}
          <label>Email<input type="email" name="email" value={form.email} onChange={updateField} placeholder="you@example.com" required /></label>
          <label>Password<input type="password" name="password" value={form.password} onChange={updateField} placeholder="Minimum 6 characters" required /></label>
          {error && <div className="error-box inline">⚠️ {error}</div>}
          <button className="primary-button" disabled={loading}>{mode === 'login' ? <LogIn size={18}/> : <UserPlus size={18}/>} {loading ? 'Please wait...' : mode === 'login' ? 'Login' : 'Register'}</button>
        </form>
        <button className="link-button" onClick={() => setMode(mode === 'login' ? 'register' : 'login')}>{mode === 'login' ? 'New user? Create account' : 'Already registered? Login'}</button>
      </div>
    </main>
  );
}
