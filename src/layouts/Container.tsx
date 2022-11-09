import clsx from 'clsx'

export default function Container({ children }: { children: React.ReactNode }) {
    return (
        <div className={clsx('max-w-4xl', 'mx-auto px-4 lg:px-0')}>
            {children}
        </div>
    )
}
