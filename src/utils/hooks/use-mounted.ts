import { useEffect, useState } from 'react'

/** Hook to determine whether a component is mounted or not. */
export function useMounted(): boolean {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        return () => setMounted(false)
    }, [])

    return mounted
}
