'use client'

import { m } from 'framer-motion'
import Image, { type StaticImageData } from 'next/image'
import { FaBroadcastTower, FaCode } from 'react-icons/fa'
import { useMedia } from 'use-media'
import { cn } from '@/utils/css'
import { cardVariants } from '@/utils/css'
import { screens } from '@/utils/tailwind'
import BtnLink from '../BtnLink'
import TechStackText from './TechStackText'

export type ProjectCardProps = {
    title: string
    sourceLink?: string
    liveLink?: string
    content: string
    stack: string
    image: {
        data: StaticImageData
        alt?: string
    }
    extraClasses?: string
}
export default function ProjectCard({
    sourceLink,
    liveLink,
    ...props
}: ProjectCardProps) {
    const isBeyondLg = useMedia({ minWidth: screens.lg })

    const cardLinks = (
        <>
            {liveLink && (
                <BtnLink href={liveLink} className='flex-1 text-sm' external>
                    <FaBroadcastTower /> Live Demo
                </BtnLink>
            )}
            {sourceLink && (
                <BtnLink href={sourceLink} className='flex-1 text-sm' external>
                    <FaCode /> Source Code
                </BtnLink>
            )}
        </>
    )

    return (
        <m.div
            className={cn(
                'flex flex-col justify-start gap-4 rounded-xl bg-neutral-100 p-8 shadow shadow-brand-900/20 transition-[color,border-color,background-color] focus-visible:border-neutral-400 focus-visible:bg-neutral-200 hocus-visible:!opacity-100 dark:border dark:border-neutral-700 dark:bg-neutral-800 dark:shadow-none dark:focus-visible:border-neutral-600 sm:flex-row md:hover:border-neutral-400 md:hover:bg-neutral-200 md:group-hover/container:opacity-75 dark:md:group-hover/container:opacity-60 dark:md:hocus-within:border-neutral-600 dark:md:hocus-within:bg-neutral-700',
                'group/card relative overflow-hidden',
            )}
            whileHover={{ scale: isBeyondLg ? 1.05 : 1 }}
            variants={cardVariants}
            transition={{
                opacity: { type: 'tween', duration: 0.3 },
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
            <div className='absolute inset-0 z-10 hidden items-center justify-center bg-transparent opacity-0 backdrop-blur transition sm:flex sm:group-focus-within/card:opacity-100 sm:group-hover/card:opacity-100'>
                <div className='flex w-1/2 flex-col gap-3 md:flex-row'>
                    {cardLinks}
                </div>
            </div>

            <div className='me-4'>
                <div
                    className={cn(
                        'h-14 w-14 overflow-hidden rounded-lg',
                        props.extraClasses,
                    )}
                >
                    <Image
                        src={props.image.data}
                        alt={props.image.alt ?? ''}
                        className='h-full w-full object-contain'
                    />
                </div>
            </div>
            <div className='flex flex-col items-start gap-y-2'>
                <div className='flex flex-col gap-x-5 sm:flex-row sm:items-center'>
                    <h3 className='shrink-0 text-lg font-bold text-dark dark:text-light'>
                        {props.title}
                    </h3>
                    <TechStackText>{props.stack}</TechStackText>
                </div>
                <p className='text-md font-normal leading-relaxed text-neutral-800 dark:text-light'>
                    {props.content}
                </p>

                <div className='mt-6 flex flex-col gap-3 self-stretch sm:hidden sm:flex-row'>
                    {cardLinks}
                </div>
            </div>
        </m.div>
    )
}
