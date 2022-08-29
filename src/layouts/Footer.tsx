import cn from 'clsx';
import { FaGithub, FaReact } from 'react-icons/fa';
import AstroLogo from '@components/AstroLogo';
import Anchor from '@components/Typography/Anchor';
import { navAndFooterCls } from 'commonClasses';

export default function Footer() {
    return (
        <footer
            id="footer"
            className={cn(
                'px-3.5 py-6',
                'space-y-4',
                'text-sm text-center',
                'bg-neutral-100 dark:bg-dark daxt-light',
                'border-t',
                navAndFooterCls,
            )}
        >
            <p>
                Made with{' '}
                <a
                    href="https://astro.build"
                    aria-label="Astro"
                    title="Astro"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <AstroLogo className="inline text-2xl fill-dark dark:fill-light" />{' '}
                </a>
            </p>
            <p>
                <Anchor href="https://github.com/abdullahzeidan/portfolio" title="GitHub">
                    Source code on <FaGithub aria-label="GitHub" className="inline text-lg" />
                </Anchor>
            </p>
        </footer>
    );
}
