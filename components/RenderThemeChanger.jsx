import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';

const RenderThemeChanger = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === 'system' ? systemTheme : theme;

  if (currentTheme === 'dark') {
    return (
      <SunIcon
        className='h-7 w-7 hover:text-orange-300'
        role='button'
        onClick={() => setTheme('light')}
      />
    );
  } else {
    return (
      <MoonIcon
        className='h-7 w-7 hover:text-gray-400'
        role='button'
        onClick={() => setTheme('dark')}
      />
    );
  }
};

export default RenderThemeChanger;
