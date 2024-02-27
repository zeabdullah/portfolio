interface BlinkingCursorProps {
    type: '|' | '_'
}
export default function BlinkingCursor({ type = '|' }: BlinkingCursorProps) {
    return (
        <>
            <span aria-hidden className='animate-blink'>
                {type}
            </span>
        </>
    )
}
