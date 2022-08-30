import { useState, useEffect } from 'react';
import clsx from 'clsx';
import { navBtnCls } from 'commonClasses';
import themeStore, { toggleTheme } from 'themeStore';
import { RiMoonClearFill, RiSunFill } from 'react-icons/ri/index.js';

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
