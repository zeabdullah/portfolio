'use client'

import { AnimatePresence, type AnimationProps, m } from 'framer-motion'
import { RiMoonClearFill, RiSunFill, RiContrastFill } from 'react-icons/ri'
import { navBtnCls } from '@/utils/classnames'
import { cn } from '@/utils/css'
import { useMounted } from '@/utils/hooks/use-mounted'
import { tapMotionProps } from '@/utils/motion/props'
import { useTheme } from '@/utils/theme'
import Tooltip from './Tooltip'

const animationProps: AnimationProps = {
    animate: { scale: 1, opacity: 1 },
    initial: { scale: 0.1, opacity: 0 },
    transition: {
        type: 'spring',
        damping: 12,
        stiffness: 140,
        mass: 0.5,
    },
}

/** The theme button used in the navbar. */
export default function ThemeToggler() {
    const { toggleTheme, isDarkMode } = useTheme()
    const mounted = useMounted()

    return (
        <Tooltip>
            <Tooltip.Content>
                {mounted
                    ? `Switch to ${isDarkMode ? 'light' : 'dark'} theme`
                    : 'Switch theme'}
            </Tooltip.Content>

            <Tooltip.Trigger asChild>
                <m.button
                    type='button'
                    className={cn(
                        navBtnCls,
                        'text-2xl transition-[background-color,box-shadow] disabled:cursor-not-allowed disabled:opacity-30',
                    )}
                    {...tapMotionProps}
                    onClick={toggleTheme}
                >
                    {!mounted ? (
                        <RiContrastFill />
                    ) : (
                        <AnimatePresence mode='popLayout'>
                            <m.div key={String(isDarkMode)} {...animationProps}>
                                {isDarkMode && <RiSunFill />}
                                {!isDarkMode && <RiMoonClearFill />}
                            </m.div>
                        </AnimatePresence>
                    )}
                </m.button>
            </Tooltip.Trigger>
        </Tooltip>
    )
}
