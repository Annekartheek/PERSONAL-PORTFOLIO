import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeToggle = ({ theme, toggleTheme }: ThemeToggleProps) => {
  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-8 right-8 p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg z-10 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? (
        <Sun size={20} className="text-teal-500" />
      ) : (
        <Moon size={20} className="text-teal-500" />
      )}
    </button>
  );
};

export default ThemeToggle;