'use client'

import { useState } from 'react'
import NavItem from '@/components/NavItem'
import { cn } from '@/utils/css'
import NavbarActions from '../NavbarActions'

export default function Navbar() {
    const [mobileNavActive, setMobileNavActive] = useState(false)

    return (
        <nav
            id='navbar'
            className={cn(
                'sticky top-0 z-50 flex min-w-full flex-wrap items-center justify-between gap-x-3 border-b backdrop-blur-[10px] dark:bg-dark dark:text-light sm:flex-nowrap md:gap-x-2',
                'border-neutral-200 px-3.5 py-4 transition-[background-color] duration-300 dark:border-opacity-10',
                mobileNavActive
                    ? 'bg-neutral-100 !bg-opacity-90 dark:!bg-opacity-90'
                    : 'bg-light bg-opacity-70 dark:bg-opacity-70',
            )}
        >
            <NavItem
                element='next-link'
                href='/'
                aria-label='Home'
                className='me-auto select-none font-mono text-2xl font-extrabold max-sm:px-2'
                onClick={() => scrollTo({ top: 0 })}
            >
                {'<Z/>'}
            </NavItem>

            <NavbarActions
                mobileNavActive={mobileNavActive}
                onMobileNavStateChange={setMobileNavActive}
            />
        </nav>
    )
}
