'use client'

import Typewriter from 'typewriter-effect'
import H2 from '@/components/typography/H2'

export default function UnderConstructionTypewriter() {
    return (
        <>
            <H2 aria-hidden className='font-extrabold'>
                Under Const
                <Typewriter
                    options={{ delay: 80 }}
                    onInit={typewriter => {
                        typewriter.pauseFor(250).typeString('ruction').start()
                    }}
                />
            </H2>
            <h2 className='sr-only'>Under Construction</h2>
        </>
    )
}
