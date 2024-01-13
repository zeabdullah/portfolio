'use client'

import Typewriter from 'typewriter-effect'
import H2 from '@/components/typography/H2'

export default function UnderConstructionTypewriter() {
    return (
        <>
            <H2 aria-hidden className='font-extrabold'>
                Under Constr
                <Typewriter
                    options={{ delay: 80 }}
                    onInit={typewriter => {
                        typewriter.pauseFor(250).typeString('uction').start()
                    }}
                />
            </H2>
            <h2 className='sr-only'>Under Construction</h2>
        </>
    )
}
