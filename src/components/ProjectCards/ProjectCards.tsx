import { m } from 'framer-motion'
import astroLogo from '$/images/astro-logo.png'
import bootstrapLogo from '$/images/bootstrap-logo.png'
import jsLogo from '$/images/js-logo.png'
import reactLogo from '$/images/react-logo.png'
import vueLogo from '$/images/vue-logo.png'
import { GITHUB_PROFILE_URL } from '@/utils/config'
import ProjectCard, { type ProjectCardProps } from './ProjectCard'

const PROJECT_LIST: ProjectCardProps[] = [
    {
        title: 'IMT',
        liveLink: 'http://imt-med.com',
        content:
            'A landing page for a medical company client, powered by Astro.',
        stack: 'React, TypeScript, Tailwind, Astro.js',
        image: { data: astroLogo, alt: 'Astro logo' },
        extraClasses: 'bg-stone-800',
    },
    {
        title: 'RGB Guessing Game',
        liveLink: 'https://rgbguess-game.netlify.app',
        sourceLink: `${GITHUB_PROFILE_URL}/RGBGuessingGame`,
        content:
            'A lightweight educational guessing game which teaches people how to determine colors from their RGB values',
        stack: 'HTML/CSS, JavaScript',
        image: { data: jsLogo, alt: 'Javascript logo' },
        extraClasses: 'p-1 bg-[#f7e018]',
    },
    {
        title: 'Car Rental Website',
        liveLink: 'https://mock-carrentals.netlify.app',
        sourceLink: `${GITHUB_PROFILE_URL}/MockCarRental`,
        content: "A simple Bootstrap car rental website's frontend",
        stack: 'HTML/CSS, Bootstrap, jQuery',
        image: { data: bootstrapLogo, alt: 'Bootstrap logo' },
        extraClasses: 'bg-accent-200 dark:bg-accent-300',
    },
    {
        title: 'Simple Weather App',
        liveLink: 'https://abdullahzeidan-vue-weather.netlify.app',
        sourceLink: `${GITHUB_PROFILE_URL}/vue-weather-app`,
        content:
            'A super simple and basic weather application, used to quickly show weather data of any city. Built for trying out Vue.js',
        stack: 'Vue 2, Sass, REST API',
        image: { data: vueLogo, alt: 'Vue logo' },
        extraClasses: 'p-2 bg-slate-200',
    },
    {
        title: 'ttf2woff2r',
        sourceLink: `${GITHUB_PROFILE_URL}/ttf2woff2r`,
        content:
            'Font optimization CLI tool, used to convert TrueType fonts (.ttf) to the optimized Web Open Font Format (.woff2) format',
        stack: 'JavaScript, Node.js',
        image: { data: jsLogo, alt: 'Javascript logo' },
        extraClasses: 'p-1 bg-[#f7e018]',
    },
    {
        title: 'react-scaffold',
        sourceLink: `${GITHUB_PROFILE_URL}/react-scaffold`,
        content:
            'Scaffold your React app from the command line. Built with TypeScript',
        stack: 'Node.js, TypeScript, oclif, Mocha TDD',
        image: { data: reactLogo, alt: 'React logo' },
        extraClasses: 'py-2 px-1 bg-slate-800',
    },
    {
        title: 'MIPS.js',
        sourceLink: `${GITHUB_PROFILE_URL}/mips.js`,
        content:
            'A terminal-based MIPS emulator written in vanilla JavaScript; a simple CLI app that can be used for educational purposes',
        stack: 'JavaScript, Node.js',
        image: { data: jsLogo, alt: 'Javascript logo' },
        extraClasses: 'p-1 bg-[#f7e018]',
    },
]

export default function ProjectCards() {
    return (
        <m.div
            id='project-cards'
            className='group/container space-y-6'
            initial='hide'
            whileInView='show'
            viewport={{ once: true, margin: '-80px 0px -240px 0px' }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.05 }}
        >
            {PROJECT_LIST.map(project => (
                <ProjectCard key={project.title} {...project} />
            ))}
        </m.div>
    )
}
