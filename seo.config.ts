import type { Metadata } from 'next/types'
import { MY_DOMAIN } from '@/utils/config'
import { colors } from '@/utils/tailwind'

export const DEFAULT_TITLE = 'Abdullah Zeidan | Web Engineer'
export const DEFAULT_DESCRIPTION =
    'A dev with the passion to make the web a greater place.'

export function generateSomeMeta({
    title,
    description,
}: {
    title: string
    description?: string
}): Metadata {
    return {
        title,
        description: description ?? DEFAULT_DESCRIPTION,
        openGraph: {
            title,
            description: description ?? DEFAULT_DESCRIPTION,
        },
    }
}

const DEFAULT_SEO: Metadata = {
    metadataBase: new URL(MY_DOMAIN),
    title: { absolute: DEFAULT_TITLE, template: '%s | Abdullah Zeidan' },
    description: DEFAULT_DESCRIPTION,
    manifest: '/meta/site.webmanifest',
    viewport: 'width=device-width, initial-scale=1',
    applicationName: 'zabd.dev',
    themeColor: colors.dark,

    // generates metadata for both `og:` and `twitter:`
    openGraph: {
        title: { absolute: DEFAULT_TITLE, template: '%s | Abdullah Zeidan' },
        description: DEFAULT_DESCRIPTION,
        type: 'website',
        siteName: "Abdullah Zeidan's Personal Website",
        images: [
            {
                url: '/images/og-image.png',
                type: 'image/png',
                alt: "Abdullah Zeidan's logo",
                width: 256,
                height: 256,
            },
        ],
    },
    twitter: {
        site: '@zabd_dev',
        card: 'summary_large_image',
    },

    icons: {
        apple: { sizes: '180x180', url: '/images/apple-touch-icon.png' },
        icon: [
            {
                rel: 'icon',
                type: 'image/svg',
                sizes: '256x256',
                url: '/favicon.svg',
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '32x32',
                url: '/favicon-32x32.png',
            },
            {
                rel: 'mask-icon',
                url: '/images/safari-pinned-tab.svg',
                color: colors.brand[600],
            },
        ],
    },
    other: {
        'google-site-verification':
            'sF_y0oto8QSBuruHbL7znfMWdsgBa3Ljk9jFwIpZYEI',
        'msapplication-TileColor': colors.dark,
    },
}

export default DEFAULT_SEO
