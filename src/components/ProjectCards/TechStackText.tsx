import clsx from 'clsx'

export default function TechStackText({
    children,
}: {
    children?: React.ReactNode
}) {
    return (
        <em>
            <p
                className={clsx(
                    'text-neutral-700 dark:text-neutral-300',
                    'text-xs',
                    'flex-shrink',
                )}
            >
                ({children})
            </p>
        </em>
    )
}
