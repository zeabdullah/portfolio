import { useTheme as useNextTheme } from 'next-themes'
import type { UseNextThemeProps, UseThemeProps } from './theme-types'

export function useTheme(): UseThemeProps {
    const themeProps = useNextTheme() as UseNextThemeProps
    const { resolvedTheme, setTheme } = themeProps

    function toggleTheme() {
        return setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
    }

    const isDarkMode = resolvedTheme === 'dark'
    const isLightMode = resolvedTheme === 'light'

    return {
        theme: resolvedTheme,
        setTheme,
        toggleTheme,
        isDarkMode,
        isLightMode,
    }
}
