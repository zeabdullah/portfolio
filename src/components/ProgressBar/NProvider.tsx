'use client'

import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import type { NextProgressProps } from '.'
import NavigationEvents from './NavigationEvents'
import ProgressBar from './ProgressBar'

export interface NProviderProps extends NextProgressProps {
    children: React.ReactNode
}

interface NProviderState {
    showProgressBar: boolean
    setShowProgressBar: (showProgressBar: boolean) => void
}

const NPContext = React.createContext<NProviderState>({
    showProgressBar: false,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setShowProgressBar: () => {},
})

/**
 * @deprecated will be removed in next major version, use AppProgressBar component instead
 * @param props
 * @see https://github.com/NdungutseCharles103/next13-progressbar#readme
 */
export const NProvider = (props: NProviderProps) => {
    const [showProgressBar, setShowProgressBar] = React.useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const anchors = document.querySelectorAll('a')
        anchors.forEach(anchor => {
            anchor.addEventListener('click', e => {
                if (anchor.target === '_blank') return
                // add prev onclick
                if (anchor.onclick) {
                    anchor.onclick(e)
                }
                if (pathname !== anchor.href) {
                    setShowProgressBar(true)
                }
            })
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const progressProps = { ...props }
    delete progressProps.children
    return (
        <NPContext.Provider value={{ showProgressBar, setShowProgressBar }}>
            {showProgressBar && <ProgressBar {...props} />}
            <NavigationEvents />
            {props.children}
        </NPContext.Provider>
    )
}

export const useNProgress = () => React.useContext(NPContext)
