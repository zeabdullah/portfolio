import { cn } from '@/utils/dom'
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
            className={cn(
                'flex flex-col items-start justify-start gap-4 sm:flex-row',
                'bg-neutral-50 focus:bg-neutral-200 md:hover:bg-neutral-200',
                'dark:bg-neutral-800/75 dark:md:hover:bg-neutral-700 dark:md:focus:bg-neutral-700',
                'rounded-md p-8',
                'border border-neutral-200 focus:border-neutral-400 md:hover:border-neutral-400',
                'dark:border-neutral-800 dark:focus:border-neutral-600 dark:md:hover:border-neutral-600',
                'shadow-sm dark:shadow-none',
                'md:group-hover:opacity-50 md:dark:group-hover:opacity-40',
                'hover:!opacity-100 focus:!opacity-100',
                'lg:hover:scale-[1.075]',
                'transition',
            )}
        >
            <div className='mr-4'>
                <div
                    className={cn(
                        'h-14 w-14 overflow-hidden rounded-lg',
                        props.extraClasses,
                    )}
                >
                    <img src={props.image} alt='' className='object-cover' />
                </div>
            </div>
            <div>
                <div
                    className={cn(
                        'flex gap-x-5',
                        'flex-col sm:flex-row sm:items-center',
                        'mb-2',
                    )}
                >
                    <h3
                        className={cn(
                            'text-lg font-bold dark:text-light',
                            'flex-shrink-0',
                        )}
                    >
                        {props.title}
                    </h3>
                    <TechStackText>{props.stack}</TechStackText>
                </div>
                <p
                    className={cn(
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
