import { useState, useEffect } from 'react'
import { persistentAtom } from '@nanostores/persistent'

type Theme = 'light' | 'dark'
const themeStore = persistentAtom<Theme>('theme', 'dark')

function toggleTheme(themeVal: Theme = themeStore.get()) {
    if (themeVal === 'dark') {
        themeStore.set('light')
    } else {
        themeStore.set('dark')
    }
}

export const useTheme = () => {
    const [isDark, setIsDark] = useState(true)

    useEffect(() => {
        return themeStore.subscribe(theme => setIsDark(theme === 'dark'))
    }, [])

    return { isDarkMode: isDark, toggleTheme }
}

export default themeStore
