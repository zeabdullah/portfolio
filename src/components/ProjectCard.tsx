import cn from 'clsx';

export type ProjectCardProps = {
    title: string;
    link: string;
    content: string;
    stack: string;
    image: string;
    extraClasses?: string;
};
export default function ProjectCard(props: ProjectCardProps): JSX.Element {
    return (
        <a
            href={props.link}
            target="_blank"
            rel="noreferrer noopener"
            className={cn(
                'flex justify-start items-start gap-4 flex-col sm:flex-row',
                'bg-neutral-50 md:hover:bg-neutral-200 focus:bg-neutral-200',
                'p-8 rounded-md',
                'border border-neutral-200 md:hover:border-neutral-400 focus:border-neutral-400',
                'shadow-sm',
                'md:group-hover:opacity-50',
                'hover:!opacity-100',
                'lg:hover:scale-[1.075]',
                'transition',
            )}
        >
            <div className="mr-4">
                <div
                    className={cn('w-14 h-14 rounded-lg overflow-hidden', props.extraClasses)}
                >
                    <img src={props.image} alt="" className="object-cover" />
                </div>
            </div>
            <div>
                <div className={cn('flex items-center flex-wrap gap-x-5', 'mb-2')}>
                    <h3 className={cn('text-lg font-bold', 'flex-shrink-0')}>{props.title}</h3>
                    <em>
                        <p className="text-neutral-400 text-xs flex-shrink">({props.stack})</p>
                    </em>
                </div>
                <p className={cn('text-neutral-800 text-md font-light leading-relaxed')}>
                    {props.content}
                </p>
            </div>
        </a>
    );
}
