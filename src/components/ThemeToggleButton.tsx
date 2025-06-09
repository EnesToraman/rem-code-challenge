import { useEffect, useState } from 'react';

export default function ThemeToggleButton() {
  const [isDark, setIsDark] = useState<boolean>(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');

    if (storedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else if (storedTheme === 'light') {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="cursor-pointer fixed bottom-4 right-4 z-10 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 shadow-lg hover:scale-110 transition-transform"
      aria-label="Toggle Theme"
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  );
}
