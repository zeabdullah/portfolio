import { DefaultSeo } from 'next-seo'
import React from 'react'
import { MY_DOMAIN } from '@/common/variables'

const title = 'Abdullah Zeidan | Software Engineer'
const description = 'A dev with the passion to make the web a greater place.'

export default function CustomHead() {
    return (
        <>
            <DefaultSeo
                title={title}
                description={description}
                canonical={MY_DOMAIN}
                twitter={{ site: MY_DOMAIN }}
                themeColor='#0f0f0f'
                openGraph={{
                    title: 'Abdullah Zeidan | Software Engineer',
                    description,
                    url: MY_DOMAIN,
                    type: 'website',
                    siteName: "Abdullah Zeidan's Personal Website/Portfolio",
                    images: [
                        {
                            url: `${MY_DOMAIN}/images/open-graph-image.png`,
                            secureUrl: `${MY_DOMAIN}/images/open-graph-image.png`,
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
                        content: '#0f0f0f',
                    },
                ]}
                additionalLinkTags={[
                    {
                        rel: 'apple-touch-icon',
                        sizes: '180x180',
                        href: '/images/apple-touch-icon.png',
                    },
                    {
                        rel: 'apple-touch-icon',
                        sizes: '180x180',
                        href: '/images/apple-touch-icon.png',
                    },
                    {
                        rel: 'icon',
                        type: 'image/png',
                        sizes: '32x32',
                        href: '/favicon-32x32.png',
                    },
                    {
                        rel: 'icon',
                        type: 'image/png',
                        sizes: '16x16',
                        href: '/favicon-16x16.png',
                    },
                    {
                        rel: 'manifest',
                        href: '/meta/site.webmanifest',
                    },
                    {
                        rel: 'mask-icon',
                        href: '/images/safari-pinned-tab.svg',
                        color: '#5bbad5',
                    },
                ]}
            />
        </>
    )
}
