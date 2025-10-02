import cx, { type ClassName } from 'classix'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassName[]) => twMerge(cx(...inputs))
