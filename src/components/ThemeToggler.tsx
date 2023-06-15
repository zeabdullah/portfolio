import { RiMoonClearFill, RiSunFill } from 'react-icons/ri'
import { navBtnCls } from '@/common/classnames'
import { cn } from '@/utils/dom'
import { useTheme } from '@/utils/theme'

export default function ThemeToggler() {
    const { isDarkMode, toggleTheme } = useTheme()

    return (
        <button
            type='button'
            className={cn(
                navBtnCls,
                'text-2xl disabled:cursor-not-allowed disabled:opacity-30',
            )}
            aria-label='Toggle Theme'
            title={'Toggle Theme'}
            onClick={toggleTheme}
        >
            {isDarkMode ? <RiSunFill /> : <RiMoonClearFill />}
        </button>
    )
}
