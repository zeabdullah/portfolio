import cn from 'clsx';
import H2 from '@components/Typography/H2';
import Section from '@components/Section';
import Subtitle from '@components/Typography/Subtitle';
import SectionHeading from '@components/SectionHeading';
import { FaReact, FaBootstrap, FaNodeJs } from 'react-icons/fa';
import { SiRedux, SiTailwindcss, SiVisualstudiocode, SiTypescript } from 'react-icons/si';

const title = 'Technologies';
const logoCls = cn(
    'opacity-60 group-hover:opacity-40 hover:!opacity-90',
    'duration-300',
    'transition',
);

export default function Technologies() {
    return (
        <Section id="tech" aria-label={title} className="text-center !pt-4">
            <SectionHeading>
                <H2>{title}</H2>
                <Subtitle>
                    The arsenal of technologies that power my day-to-day craft.
                </Subtitle>
            </SectionHeading>
            <div
                id="tech-logos"
                className={cn(
                    'flex gap-6 sm:gap-8 justify-center flex-wrap',
                    'text-4xl sm:text-5xl',
                    'group',
                )}
            >
                <div
                    title="Visual Studio Code"
                    className={cn(logoCls, 'hover:text-blue-500 hover:-rotate-6 duration-300')}
                >
                    <SiVisualstudiocode />
                </div>
                <div
                    title="TypeScript"
                    className={cn(logoCls, 'hover:text-blue-700 hover:scale-110 duration-300')}
                >
                    <SiTypescript />
                </div>
                <div
                    title="React"
                    className={cn(logoCls, 'hover:rotate-90 hover:text-sky-600 duration-500')}
                >
                    <FaReact />
                </div>
                <div
                    title="Redux"
                    className={cn(
                        logoCls,
                        'hover:scale-110 hover:text-fuchsia-800 duration-200',
                    )}
                >
                    <SiRedux />
                </div>
                <div
                    title="Bootstrap"
                    className={cn(
                        logoCls,
                        'hover:text-purple-700 hover:-rotate-12 duration-300',
                    )}
                >
                    <FaBootstrap />
                </div>
                <div
                    title="Tailwind"
                    className={cn(logoCls, 'hover:text-cyan-600 hover:rotate-12 duration-300')}
                >
                    <SiTailwindcss />
                </div>
                <div
                    title="Node.js"
                    className={cn(logoCls, 'hover:text-green-600 hover:scale-110')}
                >
                    <FaNodeJs />
                </div>
            </div>
        </Section>
    );
}
