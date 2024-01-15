import type { NProgressOptions } from 'nprogress'

export * from './NProvider'

// Credits to the creator of `next13-progressbar` for the code. https://github.com/ndungtse/next13-progressbar
export interface NextProgressProps {
    /**
     * The color of the bar.
     * @default "#29D"
     */
    color?: string
    /**
     * The start position of the bar.
     * @default 0.3
     */
    startPosition?: number
    /**
     * The delay in milliseconds.
     * @default 0
     */
    delay?: number
    /**
     * The stop delay in milliseconds.
     * @default 200
     */
    stopDelayMs?: number
    /**
     * The height of the bar.
     * @default '2px'
     */
    height?: number | string
    /**
     * Whether to show the bar on shallow routes.
     * @default true
     */
    showOnShallow?: boolean
    /**
     * The other NProgress configuration options to pass to NProgress.
     * @default null
     */
    options?: Partial<NProgressOptions>
    /**
     * The nonce attribute to use for the `style` tag.
     * @default undefined
     */
    nonce?: string

    /**
     * Use your custom CSS tag instead of the default one.
     * This is useful if you want to use a different style or minify the CSS.
     * @default (css) => <style nonce={nonce}>{css}</style>
     */
    transformCSS?: (css: string) => JSX.Element
    style?: string
}

export { NextProgressBar, useRouter } from './AppProgressBar'
