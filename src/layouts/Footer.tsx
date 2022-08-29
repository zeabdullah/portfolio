import cn from 'clsx';
import { FaGithub, FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import AstroLogo from '@components/AstroLogo';

export default function Footer() {
    return (
        <footer
            id="footer"
            className={cn(
                'px-3.5 py-6',
                'space-y-4',
                'text-sm text-center',
                'bg-neutral-50 dark:bg-dark dark:text-light',
                'border-t border-t-gray-200',
            )}
        >
            <p>
                Made by me using{' '}
                <FaReact title="React" className="inline text-xl fill-sky-600" />,{' '}
                <span aria-label="Astro" title="Astro">
                    <AstroLogo className="inline text-xl fill-neutral-700" />{' '}
                </span>
                and <SiTailwindcss title="Tailwind" className="inline text-xl fill-teal-600" />
            </p>
            <p>
                <a
                    href="github.com/abdullahzeidan/portfolio"
                    className="hover:underline underline-offset-2"
                >
                    Source code on <FaGithub className="inline text-lg" />
                </a>
            </p>
        </footer>
    );
}
