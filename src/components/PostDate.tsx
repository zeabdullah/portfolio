import { format } from 'date-fns'

export default function PostDate({
    date,
    children,
}: {
    date: Date
    children?: React.ReactNode
}) {
    return (
        <time
            dateTime={date.toISOString()}
            className='mb-2 block text-sm text-neutral-700 dark:text-neutral-400'
        >
            {children} {format(date, 'LLLL d, yyyy')}
        </time>
    )
}
