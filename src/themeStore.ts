import { atom } from 'nanostores';

type Theme = 'light' | 'dark';
const themeStore = atom<Theme>(localStorage.theme ?? 'dark');

export const toggleTheme = (themeVal: Theme = themeStore.get()) => {
    if (themeVal === 'dark') {
        themeStore.set('light');
        updateLocalStorage('light');
    } else {
        themeStore.set('dark');
        updateLocalStorage('dark');
    }
};

function updateLocalStorage(themeVal: Theme) {
    localStorage.setItem('theme', themeVal);
}

export default themeStore;
