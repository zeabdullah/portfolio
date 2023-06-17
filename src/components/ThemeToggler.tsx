import { RiMoonClearFill, RiSunFill, RiContrastFill } from 'react-icons/ri'
import { navBtnCls } from '@/common/classnames'
import { cn } from '@/utils/dom'
import { useMounted } from '@/utils/hooks/use-mounted'
import { useTheme } from '@/utils/theme'

export default function ThemeToggler() {
    const { toggleTheme, isDarkMode } = useTheme()
    const mounted = useMounted()

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
            {!mounted ? (
                <RiContrastFill />
            ) : isDarkMode ? (
                <RiSunFill />
            ) : (
                <RiMoonClearFill />
            )}
        </button>
    )
}
