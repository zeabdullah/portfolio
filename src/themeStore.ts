import { persistentAtom } from '@nanostores/persistent';

type Theme = 'light' | 'dark';
const themeStore = persistentAtom<Theme>('theme', 'dark');

export const toggleTheme = (themeVal: Theme = themeStore.get()) => {
    if (themeVal === 'dark') {
        themeStore.set('light');
    } else {
        themeStore.set('dark');
    }
};

export default themeStore;
