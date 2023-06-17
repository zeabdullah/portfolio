import { DefaultSeo } from 'next-seo'
import NextHead from 'next/head'
import React from 'react'

const title = 'Abdullah Zeidan | Software Engineer'
const description = 'A dev with the passion to make the web a greater place.'
const canonical = 'https://zabd.dev'

export default function CustomHead() {
    return (
        <>
            <DefaultSeo
                title={title}
                description={description}
                canonical={canonical}
                twitter={{ site: canonical }}
                themeColor='#0f0f0f'
                openGraph={{
                    title: 'Abdullah Zeidan | Software Engineer',
                    description,
                    url: canonical,
                    type: 'website',
                    siteName: "Abdullah Zeidan's Personal Website/Portfolio",
                    images: [
                        {
                            url: `${canonical}/images/open-graph-image.png`,
                            secureUrl: `${canonical}/images/open-graph-image.png`,
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
