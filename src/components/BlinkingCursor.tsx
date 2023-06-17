interface BlinkingCursorProps {
    type: '|' | '_'
}
export default function BlinkingCursor({ type = '|' }: BlinkingCursorProps) {
    return (
        <>
            <span aria-hidden>{type}</span>
            <style jsx>{`
                span {
                    animation: 1s blink linear infinite;
                }

                @keyframes blink {
                    from,
                    to {
                        opacity: 0;
                    }
                    50% {
                        opacity: 1;
                    }
                }
            `}</style>
        </>
    )
}
