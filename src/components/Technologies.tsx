import clsx from 'clsx'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import type { IconType } from 'react-icons/lib'
import {
    SiTailwindcss,
    SiVisualstudiocode,
    SiTypescript,
    SiNextdotjs,
    SiFigma,
    SiAstro,
    SiSvelte,
    SiMui,
} from 'react-icons/si'
import { TbBrandFramerMotion } from 'react-icons/tb'
import Section from '@/components/Section'
import SectionHeading from '@/components/SectionHeading'
import H2 from '@/components/typography/H2'
import Subtitle from '@/components/typography/Subtitle'
import { cn } from '@/utils/css'

const title = 'Technologies'
const logoCls =
    'opacity-60 transition duration-300 hover:!opacity-100 group-hover:opacity-30'

const ICONS: Array<{
    label: string
    icon: IconType
    classes?: string
    color?: string
    href?: string
}> = [
    {
        label: 'Visual Studio Code',
        icon: SiVisualstudiocode,
        href: 'https://code.visualstudio.com',
        classes: 'hover:-rotate-6 hover:text-[#20A6F2]',
    },
    {
        label: 'TypeScript',
        icon: SiTypescript,
        href: 'https://typescriptlang.org',
        classes: 'hover:?scale-110  hover:text-[#3078C6]',
    },
    {
        label: 'Next.js',
        icon: SiNextdotjs,
        href: 'https://nextjs.org',
        classes: 'hover:?scale-110',
    },
    {
        label: 'Framer Motion',
        icon: TbBrandFramerMotion,
        href: 'https://framer.com/motion',
        classes: 'hover:?scale-110  hover:text-[#EE2782]',
    },
    {
        label: 'Material UI',
        icon: SiMui,
        href: 'https://mui.com',
        classes: 'hover:?scale-110  hover:text-[#3499FE]',
    },
    {
        label: 'React',
        icon: FaReact,
        href: 'https://react.dev',
        classes: 'duration-700 hover:rotate-180 hover:text-[#58C4DC]',
    },
    {
        label: 'Astro',
        icon: SiAstro,
        href: 'https://astro.build',
        classes: 'hover:?scale-110',
    },
    {
        label: 'Tailwind CSS',
        icon: SiTailwindcss,
        href: 'https://tailwindcss.com',
        classes: 'hover:rotate-12 hover:text-[#38BDF9]',
    },
    {
        label: 'Svelte',
        icon: SiSvelte,
        href: 'https://svelte.dev',
        classes: 'hover:?scale-110 hover:text-[#FF3E00]',
    },
    {
        label: 'Node.js',
        icon: FaNodeJs,
        href: 'https://nodejs.org',
        classes: 'hover:?scale-110 duration-200 hover:text-[#5FA04F]',
    },
    {
        label: 'Figma',
        icon: SiFigma,
        href: 'https://figma.com',
        classes: cn(
            logoCls,
            'hover:?scale-105 duration-200 hover:text-[#FF7262]',
        ),
    },
]

export default function Technologies() {
    const marquee = ICONS.map(({ label, href, classes, icon: Icon }, i) => (
        <a
            key={label + i}
            href={href}
            target='_blank'
            rel='noreferrer noopener'
        >
            <Icon
                className={cn(
                    'aspect-square h-9 w-auto opacity-60 transition duration-300 hover:!opacity-100 group-hover:opacity-30 sm:h-10',
                    classes,
                )}
            />
        </a>
    ))

    return (
        <Section id='tech' aria-label={title} className='!pt-8 text-center'>
            <SectionHeading>
                <H2>{title}</H2>
                <Subtitle>
                    The arsenal of technologies that power my day-to-day craft.
                </Subtitle>
            </SectionHeading>

            <div
                id='tech-logos-wrapper'
                className={clsx(
                    'relative -my-2 overflow-hidden [--bg-clr:#ffffff] dark:[--bg-clr:#121212]',
                )}
            >
                <div className='group flex max-w-full shrink-0 items-center gap-[--gap] px-2 py-2 [--gap:3rem]'>
                    <div className='flex shrink-0 animate-marquee items-center justify-around gap-[--gap] will-change-[transform,opacity]'>
                        {marquee}
                    </div>
                    <div
                        aria-hidden
                        className='flex shrink-0 animate-marquee items-center justify-around gap-[--gap] will-change-[transform,opacity]'
                    >
                        {marquee}
                    </div>
                    <div
                        aria-hidden
                        className='flex shrink-0 animate-marquee items-center justify-around gap-[--gap] will-change-[transform,opacity]'
                    >
                        {marquee}
                    </div>
                </div>
            </div>
            <style jsx>{`
                #tech-logos-wrapper::before,
                #tech-logos-wrapper::after {
                    content: '';
                    position: absolute;
                    width: 20%;
                    height: 100%;
                    z-index: 1;
                    pointer-events: none;
                    top: 0;
                }
                #tech-logos-wrapper::before {
                    left: 0;
                    background-image: linear-gradient(
                        to right,
                        var(--bg-clr) 0%,
                        transparent 40%
                    );
                }
                #tech-logos-wrapper::after {
                    right: 0;
                    background-image: linear-gradient(
                        to left,
                        var(--bg-clr) 0%,
                        transparent 40%
                    );
                }
            `}</style>
        </Section>
    )
}
