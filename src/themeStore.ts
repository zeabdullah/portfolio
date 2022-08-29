import { atom } from 'nanostores';

type Theme = 'light' | 'dark';
const themeStore = atom<Theme>('dark');

export default themeStore;
