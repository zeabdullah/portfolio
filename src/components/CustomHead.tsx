import NextHead from 'next/head'
import React from 'react'

export default function CustomHead() {
    return (
        <NextHead>
            <meta
                name='google-site-verification'
                content='sF_y0oto8QSBuruHbL7znfMWdsgBa3Ljk9jFwIpZYEI'
            />
            <meta charSet='utf-8' />
            <meta
                name='viewport'
                content='width=device-width, initial-scale=1'
            />

            <link
                rel='apple-touch-icon'
                sizes='180x180'
                href='/images/apple-touch-icon.png'
            />

            <link
                rel='icon'
                type='image/png'
                sizes='32x32'
                href='/favicon-32x32.png'
            />
            <link
                rel='icon'
                type='image/png'
                sizes='16x16'
                href='/favicon-16x16.png'
            />

            <link rel='manifest' href='/meta/site.webmanifest' />
            <link
                rel='mask-icon'
                href='/images/safari-pinned-tab.svg'
                color='#5bbad5'
            />
            <meta
                name='apple-mobile-web-app-title'
                content="Abdullah's Portfolio"
            />

            <meta name='application-name' content="Abdullah's Portfolio" />
            <meta name='msapplication-TileColor' content='#0f0f0f' />
            <meta name='theme-color' content='#0f0f0f' />
        </NextHead>
    )
}
