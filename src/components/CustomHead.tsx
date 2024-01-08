import { DefaultSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { MY_DOMAIN } from '@/utils/config'
import { colors } from '@/utils/tailwind'

const title = 'Abdullah Zeidan | Web Engineer'
const description = 'A dev with the passion to make the web a greater place.'

export default function CustomHead() {
    const router = useRouter()
    const canonicalURL = `${MY_DOMAIN}${router.asPath}`

    return (
        <DefaultSeo
            title={title}
            description={description}
            canonical={canonicalURL}
            twitter={{
                site: canonicalURL,
                cardType: 'summary_large_image',
            }}
            themeColor={colors.dark}
            openGraph={{
                title,
                description,
                url: canonicalURL,
                type: 'website',
                siteName: "Abdullah Zeidan's Personal Website/Portfolio",
                images: [
                    {
                        url: `${MY_DOMAIN}/images/og-image.png`,
                        secureUrl: `${MY_DOMAIN}/images/og-image.png`,
                        type: 'image/png',
                        width: 256,
                        height: 256,
                        alt: "Abdullah Zeidan's logo",
                    },
                ],
            }}
            additionalMetaTags={[
                {
                    name: 'google-site-verification',
                    content: 'sF_y0oto8QSBuruHbL7znfMWdsgBa3Ljk9jFwIpZYEI',
                },
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1',
                },
                {
                    name: 'application-name',
                    content: 'zabd.dev',
                },
                {
                    name: 'msapplication-TileColor',
                    content: colors.dark,
                },
            ]}
            additionalLinkTags={[
                {
                    rel: 'apple-touch-icon',
                    sizes: '180x180',
                    href: '/images/apple-touch-icon.png',
                },
                {
                    rel: 'icon',
                    type: 'image/svg',
                    sizes: '256x256',
                    href: '/favicon.svg',
                },
                {
                    rel: 'manifest',
                    href: '/meta/site.webmanifest',
                },
                {
                    rel: 'mask-icon',
                    href: '/images/safari-pinned-tab.svg',
                    color: colors.brand[600],
                },
            ]}
        />
    )
}
