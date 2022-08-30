import clsx from 'clsx';
import { type IconType } from 'react-icons/lib';
import { FaReact, FaBootstrap, FaNodeJs } from 'react-icons/fa/index.js';
import {
    SiRedux,
    SiTailwindcss,
    SiVisualstudiocode,
    SiTypescript,
} from 'react-icons/si/index.js';
import H2 from '@components/Typography/H2';
import Section from '@components/Section';
import Subtitle from '@components/Typography/Subtitle';
import SectionHeading from '@components/SectionHeading';

const title = 'Technologies';
const logoCls = clsx(
    'opacity-60 group-hover:opacity-40 hover:!opacity-100',
    'duration-300',
    'transition',
);

const ICONS: { label: string; iconName: IconType; classes?: string }[] = [
    {
        label: 'Visual Studio Code',
        iconName: SiVisualstudiocode,
        classes: clsx(logoCls, 'hover:text-blue-500 hover:-rotate-6'),
    },
    {
        label: 'TypeScript',
        iconName: SiTypescript,
        classes: clsx(logoCls, 'hover:text-blue-700 hover:scale-110 duration-200'),
    },
    {
        label: 'Redux',
        iconName: SiRedux,
        classes: clsx(logoCls, 'hover:text-purple-700 hover:scale-110 duration-200'),
    },
    {
        label: 'React',
        iconName: FaReact,
        classes: clsx(logoCls, 'hover:rotate-90 hover:text-sky-600 duration-500'),
    },
    {
        label: 'Bootstrap',
        iconName: FaBootstrap,
        classes: clsx(logoCls, 'hover:text-fuchsia-700 hover:-rotate-12'),
    },
    {
        label: 'Tailwind',
        iconName: SiTailwindcss,
        classes: clsx(logoCls, 'hover:text-cyan-600 hover:rotate-12'),
    },
    {
        label: 'Node.js',
        iconName: FaNodeJs,
        classes: clsx(logoCls, 'hover:text-green-600 hover:scale-110'),
    },
];

export default function Technologies() {
    return (
        <Section id="tech" aria-label={title} className="text-center !pt-8">
            <SectionHeading>
                <H2>{title}</H2>
                <Subtitle>
                    The arsenal of technologies that power my day-to-day craft.
                </Subtitle>
            </SectionHeading>

            <div
                id="tech-logos"
                className={clsx(
                    'flex gap-6 sm:gap-8 justify-center flex-wrap',
                    'text-4xl sm:text-5xl',
                    'group',
                )}
            >
                {ICONS.map(({ label, classes, ...icon }) => (
                    <div
                        key={label}
                        role="presentation"
                        aria-label={label}
                        title={label}
                        className={classes}
                    >
                        <icon.iconName role="img" aria-label={label} title={label} />
                    </div>
                ))}
            </div>
        </Section>
    );
}
