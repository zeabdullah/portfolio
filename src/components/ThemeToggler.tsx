import { useState, useEffect } from 'react';
import clsx from 'clsx';
import { RiMoonClearFill, RiSunFill } from 'react-icons/ri/index.js';
import { navBtnCls } from 'common/classnames';
import { useTheme } from 'themeStore';

/**
 * I was supposed to use nanostore's `useStore` hook to automatically
 * sub to theme changes, but it didn't work out for some reason; hence I
 * used `useState` and `useEffect` to do it myself.
 */
export default function ThemeToggler() {
    const { isDarkMode, toggleTheme } = useTheme();
    const [isEnabled, setIsEnabled] = useState(false);

    useEffect(() => {
        setIsEnabled(true);
    }, []);

    return (
        <button
            type="button"
            className={clsx(
                navBtnCls,
                'text-2xl',
                'disabled:cursor-not-allowed disabled:opacity-30',
            )}
            aria-label="Toggle Theme"
            title={isEnabled ? 'Toggle Theme' : 'Awaiting script to load...'}
            disabled={!isEnabled}
            onClick={() => toggleTheme()}
        >
            {isDarkMode ? <RiSunFill /> : <RiMoonClearFill />}
        </button>
    );
}
