import cn from 'clsx';
import { NavLink } from '@components/NavLink';
import { RiMoonClearFill } from 'react-icons/ri';

export default function Navbar(): JSX.Element {
    const btnClasses = cn('text-gray-600 hover:text-black', 'hover:bg-gray-200', 'rounded-md');
    return (
        <div
            className={cn(
                'fixed top-0 min-w-full',
                'flex justify-between items-center',
                'border border-b-gray-200',
                'bg-white/90 backdrop-blur-md',
                'px-3.5 py-5',
            )}
        >
            <div>
                <NavLink
                    href="/"
                    aria-label="Home"
                    title="This means home"
                    className="text-xl !p-4"
                >
                    ../
                </NavLink>
            </div>

            <nav className="flex justify-between items-center gap-1">
                <button
                    className={cn(btnClasses, 'p-3 mr-5', 'text-xl')}
                    title="Toggle Theme"
                    onClick={() => {}}
                >
                    <RiMoonClearFill aria-label="Switch to dark" />
                </button>

                <div className="links hidden sm:contents">
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="#projects">Projects</NavLink>
                    <NavLink href="#tech">Technologies</NavLink>
                    <NavLink href="#resume">Resume</NavLink>
                </div>

                <button
                    className={cn(btnClasses, 'sm:hidden', 'px-5 py-1.5')}
                    onClick={() => {}}
                >
                    MENU
                </button>
            </nav>
        </div>
    );
}
