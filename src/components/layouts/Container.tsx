import { cn } from '@/utils/css'

export default function Container({
    children,
    className,
}: {
    children: React.ReactNode
    className?: string
}) {
    return (
        <div className={cn('mx-auto max-w-4xl px-4 lg:px-0', className)}>
            {children}
        </div>
    )
}
