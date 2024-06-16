import { m } from 'framer-motion'
import type { ReactNode } from 'react'
import { RiMenuFill, RiCloseLine } from 'react-icons/ri'
import ThemeToggler from '@/components/ThemeToggler'
import { navBtnCls } from '@/utils/classnames'
import { cn } from '@/utils/css'
import { tapMotionProps } from '@/utils/css'
import NavItem from './NavItem'
import Tooltip from './Tooltip'

const LINKS: Array<{
    href: string
    children: ReactNode
    pulseEffect?: boolean
}> = [
    { href: '/', children: 'Home' },
    { href: '/blog', children: 'Blog' },
    { href: '/recipes', children: 'Recipes' },
]

interface NavbarActionsProps {
    mobileNavActive: boolean
    onMobileNavStateChange: (newState: boolean) => void
}

export default function NavbarActions({
    mobileNavActive,
    onMobileNavStateChange,
}: NavbarActionsProps) {
    const toggleNavCollapse = () => onMobileNavStateChange(!mobileNavActive)
    const hideMobileNav = () => onMobileNavStateChange(false)

    return (
        <>
            <div className='inline-flex items-center gap-x-3 md:gap-x-2'>
                <ThemeToggler />
                <Tooltip>
                    <Tooltip.Content>
                        {mobileNavActive ? 'Close menu' : 'Menu'}
                    </Tooltip.Content>
                    <Tooltip.Trigger asChild>
                        <m.button
                            type='button'
                            className={cn(navBtnCls, 'text-2xl sm:hidden')}
                            onClick={toggleNavCollapse}
                            {...tapMotionProps}
                        >
                            {mobileNavActive ? <RiCloseLine /> : <RiMenuFill />}
                        </m.button>
                    </Tooltip.Trigger>
                </Tooltip>
            </div>

            <div
                className={cn(
                    'mt-8 sm:mt-0 sm:flex sm:basis-auto sm:flex-row sm:items-center sm:gap-1',
                    mobileNavActive
                        ? 'flex basis-full flex-col items-stretch justify-between gap-4'
                        : 'hidden',
                )}
            >
                {LINKS.map(props => (
                    <NavItem
                        element='next-link'
                        {...props}
                        key={props.href}
                        onClick={hideMobileNav}
                    />
                ))}
            </div>
        </>
    )
}
