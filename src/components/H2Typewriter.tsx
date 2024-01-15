'use client'

import Typewriter from 'typewriter-effect'
import H2 from '@/components/typography/H2'

export default function H2Typewriter({ text }: { text: string }) {
    return (
        <>
            <H2 aria-hidden className='font-extrabold'>
                {text.split(' ').slice(0, -1).join(' ') + ' '}
                <Typewriter
                    options={{ delay: 80 }}
                    onInit={typewriter => {
                        typewriter
                            .pauseFor(250)
                            .typeString(text.split(' ').at(-1) as string)
                            .start()
                    }}
                />
            </H2>
            <h2 className='sr-only'>{text}</h2>
        </>
    )
}
