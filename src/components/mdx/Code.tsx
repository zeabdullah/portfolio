import { cn } from '@/utils/css'

export default function Code({
    className,
    ...props
}: React.ComponentPropsWithoutRef<'code'>) {
    return (
        <code
            className={cn(
                'rounded-md bg-neutral-100 px-1.5 py-0.5 outline outline-neutral-200 before:hidden after:hidden dark:bg-neutral-800 dark:outline-neutral-700',
                className,
            )}
            {...props}
        />
    )
}
