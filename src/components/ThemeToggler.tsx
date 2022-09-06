import { useState, useEffect } from 'react';
import clsx from 'clsx';
import { RiMoonClearFill, RiSunFill } from 'react-icons/ri/index.js';
import { navBtnCls } from 'commonClasses';
import themeStore, { toggleTheme } from 'themeStore';

/**
 * I was supposed to use nanostore's `useStore` hook to automatically
 * sub to theme changes, but it didn't work out for some reason; hence I
 * used `useState` and `useEffect` to do it myself.
 */
export default function ThemeToggler() {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const unsub = themeStore.subscribe(theme => setIsDark(theme === 'dark'));
        return unsub;
    }, []);

    return (
        <button
            className={clsx(navBtnCls, 'text-2xl')}
            title="Toggle Theme"
            aria-label="Toggle Theme"
            onClick={() => toggleTheme()}
        >
            {isDark ? <RiSunFill /> : <RiMoonClearFill />}
        </button>
    );
}
