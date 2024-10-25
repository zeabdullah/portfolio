'use client'

import { m } from 'framer-motion'
import Image from 'next/image'
import { useId } from 'react'
import myAvatar from '$/images/my-avatar.jpeg'
import BtnLink from '@/components/BtnLink'
import Section from '@/components/Section'
import SectionHeading from '@/components/SectionHeading'
import H2 from '@/components/typography/H2'
import Subtitle from '@/components/typography/Subtitle'
import { READCV_URL } from '@/utils/config'
import { cardVariants } from '@/utils/css'
import ReadCvLogo from './icons/ReadCvLogo'

export default function Resume() {
    const labelId = useId()

    return (
        <Section id='resume' aria-labelledby={labelId}>
            <m.div
                className='justify-center? mx-auto mb-6 flex items-center'
                initial='hide'
                whileInView='show'
                variants={cardVariants}
                viewport={{ once: true, margin: '0px 0px -100px 0px' }}
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
                <Image
                    src={myAvatar}
                    alt='My avatar.'
                    width={80}
                    className='aspect-square rounded-full outline outline-2 outline-neutral-500'
                />
            </m.div>

            <SectionHeading>
                <H2 id={labelId}>Resume / CV</H2>
                <Subtitle>
                    Know more about my career and past experience.
                </Subtitle>
            </SectionHeading>

            <BtnLink
                href={READCV_URL}
                className='flex-1 basis-full'
                attractive
                external
            >
                <ReadCvLogo className='text-lg' /> View Resume
            </BtnLink>
        </Section>
    )
}
