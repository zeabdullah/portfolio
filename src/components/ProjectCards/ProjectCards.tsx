import clsx from 'clsx';
import ProjectCard, { ProjectCardProps } from './ProjectCard';

const PROJECT_LIST: ProjectCardProps[] = [
    {
        title: 'IMT',
        link: 'http://imt-med.com',
        content: 'A landing page for a medical company client, powered by Astro.',
        stack: 'React, TypeScript, Tailwind, Astro.js',
        image: '/images/astro-logo.png',
        extraClasses: 'bg-stone-800',
    },
    {
        title: 'RGB Guessing Game',
        link: 'https://rgbguess-game.netlify.app',
        content:
            'A lightweight educational guessing game which teaches people how to determine colors from their RGB values',
        stack: 'HTML/CSS, JavaScript',
        image: '/images/js-logo.png',
        extraClasses: 'p-1 bg-[#f7e018]',
    },
    {
        title: 'Car Rental Website',
        link: 'https://mock-carrentals.netlify.app',
        content: "A simple Bootstrap car rental website's frontend",
        stack: 'HTML/CSS, Bootstrap, jQuery',
        image: '/images/bootstrap-logo.png',
        extraClasses: 'bg-purple-200 dark:bg-purple-300',
    },
    {
        title: 'Simple Weather App',
        link: 'https://abdullahzeidan-vue-weather.netlify.app',
        content:
            'A super simple and basic weather application, used to quickly show weather data of any city. Built for trying out Vue.js',
        stack: 'Vue 2, Sass, REST API',
        image: '/images/vue-logo.png',
        extraClasses: 'p-2 bg-slate-200',
    },
    {
        title: 'react-scaffold',
        link: 'https://github.com/AbdullahZeidan/react-scaffold',
        content: 'Scaffold your React app from the command line. Built with TypeScript',
        stack: 'Node.js, TypeScript, oclif, Mocha TDD',
        image: '/images/react-logo2.png',
        extraClasses: 'py-2 px-1 bg-slate-800',
    },
    {
        title: 'MIPS.js',
        link: 'https://github.com/AbdullahZeidan/mips.js',
        content:
            'A terminal-based MIPS emulator written in vanilla JavaScript; a simple CLI app that can be used for educational purposes',
        stack: 'Node.js, JavaScript',
        image: '/images/js-logo.png',
        extraClasses: 'p-1 bg-[#f7e018]',
    },
];

export default function ProjectCards() {
    return (
        <div id="project-cards" className={clsx('grid gap-6', 'group')}>
            {PROJECT_LIST.map(project => (
                <ProjectCard key={project.title} {...project} />
            ))}
        </div>
    );
}
