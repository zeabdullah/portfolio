type SectionHeadingProps = { children: React.ReactNode }

export default function SectionHeading({ children }: SectionHeadingProps) {
    return <div className='mb-12'>{children}</div>
}
