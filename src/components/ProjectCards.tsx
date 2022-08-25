import cn from 'clsx';
import ProjectCard from './ProjectCard';

const PROJECT_LIST = [
    {
        title: 'react-scaffold',
        link: '#',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatem Hic quos impedit quidem, hic quos impedit quidem!',
        stack: 'Node.js, TypeScript, oclif, Mocha TDD',
        image: '/react-logo.png',
    },
    {
        title: 'IMT',
        link: '#',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatem Hic quos impedit quidem, hic quos impedit quidem!',
        stack: 'React, TypeScript, Tailwind, Astro.js',
        image: '/astro-logo.png',
    },
    {
        title: 'MIPS.js',
        link: '#',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatem dolor inventore quisquam eaque maiores similique odio hic quos impedit quidem, quis voluptatibus. Hic!',
        stack: 'Node.js, JavaScript',
        image: '/js-logo.png',
    },

    {
        title: 'RGB Guessing Game',
        link: '#',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatem Hic quos impedit quidem, hic quos impedit quidem!',
        stack: 'HTML/CSS, JavaScript',
        image: '/js-logo.png',
    },
    {
        title: 'Project ZY',
        link: '#',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatem Hic quos impedit quidem, hic quos impedit quidem!',
        stack: 'React, TypeScript, Tailwind, Node.js, MongoDB, KeystoneJS',
        image: '/astro-logo.png',
    },
];

export default function ProjectCards() {
    return (
        <div id="project-cards" className={cn('grid gap-6', 'group')}>
            {PROJECT_LIST.map(project => (
                <ProjectCard key={project.title} {...project} />
            ))}
        </div>
    );
}
