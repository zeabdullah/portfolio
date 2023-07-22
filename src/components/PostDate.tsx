import { format, parseISO } from 'date-fns'

export default function PostDate({ children }: { children: string }) {
    return (
        <time
            dateTime={children}
            className='mb-2 block text-neutral-700 dark:text-neutral-400'
        >
            {format(parseISO(children), 'LLLL d, yyyy')}
        </time>
    )
}
