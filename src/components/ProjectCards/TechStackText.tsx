export default function TechStackText({
    children,
}: {
    children?: React.ReactNode
}) {
    return (
        <em>
            <p className='shrink text-xs text-neutral-700 dark:text-neutral-300'>
                ({children})
            </p>
        </em>
    )
}
