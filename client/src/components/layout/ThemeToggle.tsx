import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => window.matchMedia('(prefers-color-scheme: dark)').matches);
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    document.body.style.color = dark ? '#e2e8f0' : '#0f172a';
    document.body.style.background = dark ? 'rgb(10 12 18)' : 'rgb(247 249 252)';
  }, [dark]);
  return (
    <button aria-label="Toggle theme" className="btn btn-ghost" onClick={() => setDark(!dark)}>
      {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
}
