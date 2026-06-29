import { LayoutDashboard, LogOut, Moon, Sparkles, Sun, WandSparkles } from 'lucide-react';

export default function Header({ user, darkMode, onToggleTheme, onLogout }) {
  return (
    <header className="header nav-glass">
      <a className="brand" href="#create" aria-label="LocalBrandAI home">
        <div className="brand-icon">
          <WandSparkles size={20} />
        </div>

        <div>
          <strong>LocalBrandAI</strong>
          <small>AI Marketing Studio</small>
        </div>
      </a>

      <nav className="nav-links" aria-label="Primary navigation">
        <a href="#create">Create</a>
        <a href="#dashboard">Dashboard</a>
        <a href="#features">Features</a>
      </nav>

      <div className="nav-actions">
        <div className="user-chip">
          <Sparkles size={14} />
          <span>{user?.name || 'Om'}</span>
        </div>

        <button className="icon-button" onClick={onToggleTheme} title="Toggle theme">
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          <span>{darkMode ? 'Light' : 'Dark'}</span>
        </button>

        <a className="github-button" href="#dashboard">
          <LayoutDashboard size={17} />
          <span>Dashboard</span>
        </a>

        <button className="icon-button danger-soft" onClick={onLogout}>
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </div>
    </header>
  );
}