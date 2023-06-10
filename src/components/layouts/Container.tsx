export default function Container({ children }: { children: React.ReactNode }) {
    return <div className='mx-auto max-w-4xl px-4 lg:px-0'>{children}</div>
}
