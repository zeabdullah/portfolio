import confetti from 'canvas-confetti'
import Button, { type ButtonProps } from './Button'

export default function ConfettiButton(props: ButtonProps) {
    const confettiOptions: (angle: number) => confetti.Options = angle => ({
        angle,
        spread: randomInRange(45, 80),
        particleCount: randomInRange(200, 400),
    })

    const celebrate = () => {
        confetti({ origin: { x: 0 }, ...confettiOptions(80) })
        confetti({ origin: { x: 1 }, ...confettiOptions(100) })
    }

    return <Button {...props} onClick={celebrate} />
}

const randomInRange = (min: number, max: number) =>
    Math.random() * (max - min) + min
