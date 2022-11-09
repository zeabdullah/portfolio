import clsx from 'clsx'
import TechStackText from './TechStackText'

export type ProjectCardProps = {
    title: string
    link: string
    content: string
    stack: string
    image: string
    extraClasses?: string
}
export default function ProjectCard(props: ProjectCardProps): JSX.Element {
    return (
        <a
            href={props.link}
            target='_blank'
            rel='noreferrer noopener'
            className={clsx(
                'flex justify-start items-start gap-4 flex-col sm:flex-row',
                'bg-neutral-50 md:hover:bg-neutral-200 focus:bg-neutral-200',
                'dark:bg-neutral-800/75 dark:md:hover:bg-neutral-700 dark:md:focus:bg-neutral-700',
                'p-8 rounded-md',
                'border border-neutral-200 md:hover:border-neutral-400 focus:border-neutral-400',
                'dark:border-neutral-800 dark:md:hover:border-neutral-600 dark:focus:border-neutral-600',
                'shadow-sm dark:shadow-none',
                'group-hover:opacity-50 dark:group-hover:opacity-40',
                'hover:!opacity-100',
                'lg:hover:scale-[1.075]',
                'transition',
            )}
        >
            <div className='mr-4'>
                <div
                    className={clsx(
                        'w-14 h-14 rounded-lg overflow-hidden',
                        props.extraClasses,
                    )}
                >
                    <img src={props.image} alt='' className='object-cover' />
                </div>
            </div>
            <div>
                <div
                    className={clsx(
                        'flex gap-x-5',
                        'flex-col sm:flex-row sm:items-center',
                        'mb-2',
                    )}
                >
                    <h3
                        className={clsx(
                            'text-lg font-bold dark:text-light',
                            'flex-shrink-0',
                        )}
                    >
                        {props.title}
                    </h3>
                    <TechStackText>{props.stack}</TechStackText>
                </div>
                <p
                    className={clsx(
                        'text-neutral-800 dark:text-light',
                        'text-md font-light leading-relaxed',
                    )}
                >
                    {props.content}
                </p>
            </div>
        </a>
    )
}
