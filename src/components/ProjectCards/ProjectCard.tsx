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
            className='flex flex-col items-start justify-start gap-4 rounded-md border border-neutral-200 bg-neutral-50 p-8 shadow-sm transition hover:!opacity-100 focus:border-neutral-400 focus:bg-neutral-200 focus:!opacity-100 dark:border-neutral-800 dark:bg-neutral-800/75 dark:shadow-none dark:focus:border-neutral-600 sm:flex-row md:hover:border-neutral-400 md:hover:bg-neutral-200 md:group-hover:opacity-50 dark:md:hover:border-neutral-600 dark:md:hover:bg-neutral-700 dark:md:focus:bg-neutral-700 md:dark:group-hover:opacity-40 lg:hover:scale-[1.075]'
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
                <div className='mb-2 flex flex-col gap-x-5 sm:flex-row sm:items-center'>
                    <h3 className='flex-shrink-0 text-lg font-bold dark:text-light'>
                        {props.title}
                    </h3>
                    <TechStackText>{props.stack}</TechStackText>
                </div>
                <p className='text-md font-light leading-relaxed text-neutral-800 dark:text-light'>
                    {props.content}
                </p>
            </div>
        </a>
    )
}
