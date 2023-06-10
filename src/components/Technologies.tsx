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
import H2 from '@/components/Typography/H2'
import Subtitle from '@/components/Typography/Subtitle'
import { cn } from '@/utils/dom'

const title = 'Technologies'
const logoCls = cn(
    'opacity-60 group-hover:opacity-40 hover:!opacity-100',
    'duration-300',
    'transition',
)

const ICONS: { label: string; iconName: IconType; classes?: string }[] = [
    {
        label: 'Visual Studio Code',
        iconName: SiVisualstudiocode,
        classes: cn(logoCls, 'hover:text-blue-500 hover:-rotate-6'),
    },
    {
        label: 'TypeScript',
        iconName: SiTypescript,
        classes: cn(
            logoCls,
            'hover:text-blue-600 hover:scale-110 duration-200',
        ),
    },
    {
        label: 'Next.js',
        iconName: SiNextdotjs,
        classes: cn(
            logoCls,
            'hover:text-dark dark:hover:text-light hover:scale-110 duration-200',
        ),
    },
    {
        label: 'React',
        iconName: FaReact,
        classes: cn(logoCls, 'hover:rotate-90 hover:text-sky-600 duration-500'),
    },
    {
        label: 'Tailwind',
        iconName: SiTailwindcss,
        classes: cn(logoCls, 'hover:text-cyan-600 hover:rotate-12'),
    },
    {
        label: 'Node.js',
        iconName: FaNodeJs,
        classes: cn(logoCls, 'hover:text-green-600 hover:scale-110'),
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
                className={cn(
                    'flex flex-wrap justify-center gap-6 sm:gap-8',
                    'text-4xl sm:text-5xl',
                    'group',
                )}
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
