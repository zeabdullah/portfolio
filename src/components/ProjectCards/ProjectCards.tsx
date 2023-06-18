import astroLogo from '$public/images/astro-logo.png'
import bootstrapLogo from '$public/images/bootstrap-logo.png'
import jsLogo from '$public/images/js-logo.png'
import reactLogo from '$public/images/react-logo.png'
import vueLogo from '$public/images/vue-logo.png'
import { m } from 'framer-motion'
import { githubProfileUrl } from '@/common/variables'
import { fadeVariants, cardVariants } from '@/utils/motion'
import ProjectCard, { type ProjectCardProps } from './ProjectCard'

const PROJECT_LIST: ProjectCardProps[] = [
    {
        title: 'IMT',
        link: 'http://imt-med.com',
        content:
            'A landing page for a medical company client, powered by Astro.',
        stack: 'React, TypeScript, Tailwind, Astro.js',
        image: { data: astroLogo, alt: 'Astro logo' },
        extraClasses: 'bg-stone-800',
    },
    {
        title: 'RGB Guessing Game',
        link: 'https://rgbguess-game.netlify.app',
        content:
            'A lightweight educational guessing game which teaches people how to determine colors from their RGB values',
        stack: 'HTML/CSS, JavaScript',
        image: { data: jsLogo, alt: 'Javascript logo' },
        extraClasses: 'p-1 bg-[#f7e018]',
    },
    {
        title: 'Car Rental Website',
        link: 'https://mock-carrentals.netlify.app',
        content: "A simple Bootstrap car rental website's frontend",
        stack: 'HTML/CSS, Bootstrap, jQuery',
        image: { data: bootstrapLogo, alt: 'Bootstrap logo' },
        extraClasses: 'bg-purple-200 dark:bg-purple-300',
    },
    {
        title: 'Simple Weather App',
        link: 'https://abdullahzeidan-vue-weather.netlify.app',
        content:
            'A super simple and basic weather application, used to quickly show weather data of any city. Built for trying out Vue.js',
        stack: 'Vue 2, Sass, REST API',
        image: { data: vueLogo, alt: 'Vue logo' },
        extraClasses: 'p-2 bg-slate-200',
    },
    {
        title: 'react-scaffold',
        link: `${githubProfileUrl}/react-scaffold`,
        content:
            'Scaffold your React app from the command line. Built with TypeScript',
        stack: 'Node.js, TypeScript, oclif, Mocha TDD',
        image: { data: reactLogo, alt: 'React logo' },
        extraClasses: 'py-2 px-1 bg-slate-800',
    },
    {
        title: 'MIPS.js',
        link: `${githubProfileUrl}/mips.js`,
        content:
            'A terminal-based MIPS emulator written in vanilla JavaScript; a simple CLI app that can be used for educational purposes',
        stack: 'Node.js, JavaScript',
        image: { data: jsLogo, alt: 'Javascript logo' },
        extraClasses: 'p-1 bg-[#f7e018]',
    },
]

export default function ProjectCards() {
    return (
        <m.div
            id='project-cards'
            className='group grid gap-6'
            initial='hide'
            whileInView='show'
            variants={fadeVariants}
            viewport={{ once: false, margin: '-80px 0px -200px 0px' }}
            transition={{ staggerChildren: 0.08, delayChildren: 0.05 }}
        >
            {PROJECT_LIST.map(project => (
                <m.div
                    key={project.title}
                    tabIndex={-1}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.975 }}
                    variants={cardVariants}
                    transition={{
                        opacity: { type: 'tween', duration: 0.4 },
                        scale: {
                            type: 'spring',
                            stiffness: 400,
                            damping: 14,
                            mass: 0.5,
                        },
                        type: 'spring',
                        stiffness: 200,
                        damping: 18,
                        mass: 1,
                    }}
                >
                    <ProjectCard {...project} />
                </m.div>
            ))}
        </m.div>
    )
}
