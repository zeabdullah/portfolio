type SectionHeadingProps = { children: React.ReactNode };

export default function SectionHeading({ children }: SectionHeadingProps) {
    return <div className="mb-6">{children}</div>;
}
