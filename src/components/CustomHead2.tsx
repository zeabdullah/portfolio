'use client'

import { usePathname } from 'next/navigation'
import { MY_DOMAIN } from '@/utils/config'

/** A custom `<head>` for when `generateMetadata()` doesn't suffice. */
export default function CustomHead2() {
    const pathname = usePathname()
    const CANONICAL_URL = `${MY_DOMAIN}${pathname}`

    return (
        // eslint-disable-next-line @next/next/no-head-element
        <head>
            <link rel='canonical' href={CANONICAL_URL} />
            <meta property='og:url' content={CANONICAL_URL} />
        </head>
    )
}
