import { useState, useEffect } from 'react'
import { RiMoonClearFill, RiSunFill } from 'react-icons/ri'
import { navBtnCls } from '@/common/classnames'
import { cn } from '@/utils/dom'

export function useTheme() {
    return {
        isDarkMode: true,
        toggleTheme: () => {
            //
        },
    }
}
export default function ThemeToggler() {
    const { isDarkMode, toggleTheme } = useTheme()
    const [isEnabled, setIsEnabled] = useState(false)

    useEffect(() => {
        setIsEnabled(true)
    }, [])

    return (
        <button
            type='button'
            className={cn(
                navBtnCls,
                'text-2xl disabled:cursor-not-allowed disabled:opacity-30',
            )}
            aria-label='Toggle Theme'
            title={isEnabled ? 'Toggle Theme' : 'Awaiting script to load...'}
            disabled={!isEnabled}
            onClick={() => toggleTheme()}
        >
            {isDarkMode ? <RiSunFill /> : <RiMoonClearFill />}
        </button>
    )
}
