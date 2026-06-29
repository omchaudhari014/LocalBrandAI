
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

function getToken() {
  return localStorage.getItem('localbrandai_token') || '';
}

async function request(path, options = {}) {
  const token = getToken();
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers || {})
    },
    ...options
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || 'API request failed');
  return data;
}

export function register(payload) { return request('/api/auth/register', { method: 'POST', body: JSON.stringify(payload) }); }
export function login(payload) { return request('/api/auth/login', { method: 'POST', body: JSON.stringify(payload) }); }
export function me() { return request('/api/auth/me'); }
export function generateCampaign(payload) { return request('/api/generate', { method: 'POST', body: JSON.stringify(payload) }); }
export function getCampaigns() { return request('/api/campaigns'); }
export function deleteCampaign(id) { return request(`/api/campaigns/${id}`, { method: 'DELETE' }); }
