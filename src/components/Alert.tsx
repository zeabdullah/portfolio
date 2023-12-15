import type { IconType } from 'react-icons'
import { FiAlertOctagon, FiAlertTriangle, FiInfo } from 'react-icons/fi'
import { cn } from '@/utils/css'

export interface AlertProps {
    variant: 'primary' | 'danger' | 'amber'
    children: React.ReactNode
}

const classes = {
    primary:
        'border-brand-200 bg-brand-100 text-brand-900 dark:border-brand-900 dark:bg-brand-950 dark:text-brand-200',
    danger: 'border-red-200 bg-red-100 text-red-900 dark:border-red-900 dark:bg-red-950 dark:text-red-200',
    amber: 'border-amber-200 bg-amber-100 text-amber-900 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-200',
} as const satisfies Record<AlertProps['variant'], string>

const icons = {
    primary: FiInfo,
    danger: FiAlertTriangle,
    amber: FiAlertOctagon,
} as const satisfies Record<AlertProps['variant'], IconType>

export default function Alert({ variant, children }: AlertProps) {
    const Icon = icons[variant]

    return (
        <div
            className={cn(
                'flex items-center gap-2 rounded-md border p-3 py-4 text-sm transition-[color] duration-300',
                classes[variant],
            )}
        >
            <Icon className='inline-block shrink-0 text-xl' />
            <div>{children}</div>
        </div>
    )
}
