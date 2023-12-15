import { format, parseISO } from 'date-fns'

export default function PostDate({
    date,
    children,
}: {
    date: string
    children?: React.ReactNode
}) {
    return (
        <time
            dateTime={date}
            className='mb-2 block text-neutral-700 dark:text-neutral-400'
        >
            {children} {format(parseISO(date), 'LLLL d, yyyy')}
        </time>
    )
}
