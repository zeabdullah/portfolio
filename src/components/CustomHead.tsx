'use client'

import { usePathname } from 'next/navigation'
import Script from 'next/script'
import { MY_DOMAIN } from '@/utils/config'

/** A custom `<head>` for when `generateMetadata()` doesn't suffice. */
export default function CustomHead() {
    const pathname = usePathname()
    const CANONICAL_URL = `${MY_DOMAIN}${pathname}`

    return (
        // eslint-disable-next-line @next/next/no-head-element
        <head>
            <link rel='canonical' href={CANONICAL_URL} />
            <meta property='og:url' content={CANONICAL_URL} />
            <Script
                async
                src='https://analytics.zabd.dev/script.js'
                data-website-id='a9d78ec7-c5cd-48c3-8b4c-43eb2ce3ad9d'
            />
        </head>
    )
}
