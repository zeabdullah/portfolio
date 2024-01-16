import { useTheme as useNextTheme } from 'next-themes'

export type Theme = 'light' | 'dark'

export interface UseNextThemeProps {
    themes: Theme[]
    forcedTheme?: Theme
    setTheme: (theme: Theme) => void
    theme?: Theme
    resolvedTheme?: Theme
    systemTheme?: 'dark' | 'light'
}

export interface UseThemeProps {
    theme?: Theme
    isDarkMode: boolean
    isLightMode: boolean
    toggleTheme: () => void
    setTheme: (theme: Theme) => void
}

export function useTheme(): UseThemeProps {
    const nextThemeProps = useNextTheme() as UseNextThemeProps
    const { resolvedTheme, setTheme, theme } = nextThemeProps

    function toggleTheme() {
        return setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
    }

    const isDarkMode = theme === 'dark'
    const isLightMode = theme === 'light'

    return {
        theme: resolvedTheme,
        setTheme,
        toggleTheme,
        isDarkMode,
        isLightMode,
    }
}
