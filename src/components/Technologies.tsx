import { FaReact, FaNodeJs } from 'react-icons/fa'
import { type IconType } from 'react-icons/lib'
import {
    SiTailwindcss,
    SiVisualstudiocode,
    SiTypescript,
    SiNextdotjs,
} from 'react-icons/si'
import Section from '@/components/Section'
import SectionHeading from '@/components/SectionHeading'
import H2 from '@/components/typography/H2'
import Subtitle from '@/components/typography/Subtitle'
import { cn } from '@/utils/css'

const title = 'Technologies'
const logoCls =
    'opacity-60 hover:!opacity-100 group-hover:opacity-40 duration-300 transition'

const ICONS: { label: string; iconName: IconType; classes?: string }[] = [
    {
        label: 'Visual Studio Code',
        iconName: SiVisualstudiocode,
        classes: cn(logoCls, 'hover:-rotate-6 hover:text-blue-500'),
    },
    {
        label: 'TypeScript',
        iconName: SiTypescript,
        classes: cn(
            logoCls,
            'duration-200 hover:scale-110 hover:text-blue-600',
        ),
    },
    {
        label: 'Next.js',
        iconName: SiNextdotjs,
        classes: cn(
            logoCls,
            'duration-200 hover:scale-110 hover:text-dark dark:hover:text-light',
        ),
    },
    {
        label: 'React',
        iconName: FaReact,
        classes: cn(logoCls, 'duration-500 hover:rotate-90 hover:text-sky-600'),
    },
    {
        label: 'Tailwind',
        iconName: SiTailwindcss,
        classes: cn(logoCls, 'hover:rotate-12 hover:text-cyan-600'),
    },
    {
        label: 'Node.js',
        iconName: FaNodeJs,
        classes: cn(logoCls, 'hover:scale-110 hover:text-green-600'),
    },
]

export default function Technologies() {
    return (
        <Section id='tech' aria-label={title} className='!pt-8 text-center'>
            <SectionHeading>
                <H2>{title}</H2>
                <Subtitle>
                    The arsenal of technologies that power my day-to-day craft.
                </Subtitle>
            </SectionHeading>

            <div
                id='tech-logos'
                className='group flex flex-wrap justify-center gap-6 text-4xl sm:gap-8 sm:text-5xl'
            >
                {ICONS.map(({ label, classes, iconName: IconName }) => (
                    <div
                        key={label}
                        role='presentation'
                        aria-label={label}
                        title={label}
                        className={classes}
                    >
                        <IconName role='img' aria-label={label} title={label} />
                    </div>
                ))}
            </div>
        </Section>
    )
}
