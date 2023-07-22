import confetti from 'canvas-confetti'
import type { ComponentPropsWithoutRef } from 'react'
import Button from './Button'

export default function ConfettiButton({
    children,
    ...props
}: ComponentPropsWithoutRef<typeof Button>) {
    const celebrate = () => {
        confetti({ origin: { x: 0 } })
        confetti({ origin: { x: 1 } })
    }

    return (
        <div className='contents'>
            <Button {...props} onClick={celebrate}>
                {children}
            </Button>
        </div>
    )
}
