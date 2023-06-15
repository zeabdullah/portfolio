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
