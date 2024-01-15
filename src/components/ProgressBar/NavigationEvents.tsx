'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { useNProgress } from './NProvider'

export default function NavigationEvents() {
    const pathname = usePathname()
    const { setShowProgressBar } = useNProgress()

    useEffect(() => {
        setShowProgressBar(false)
    }, [pathname, setShowProgressBar])

    return null
}
