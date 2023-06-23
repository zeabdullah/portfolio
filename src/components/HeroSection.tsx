import { useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdPersonOutline } from 'react-icons/md'
import Typewriter from 'typewriter-effect'
import { githubProfileUrl } from '@/common/variables'
import BtnLink from '@/components/BtnLink'
import IconLink from '@/components/IconLink'
import Section from '@/components/Section'
import Anchor from '@/components/typography/Anchor'
import P from '@/components/typography/P'
import H1 from './typography/H1'

const sectionLabel = 'header-heading'

export default function HeroSection() {
    const [firstTyperDone, setFirstTyperDone] = useState(false)

    return (
        <Section id='header' role='banner' aria-labelledby={sectionLabel}>
            <h1 className='sr-only' id={sectionLabel}>
                <strong>I&apos;m Abdullah.</strong> A dev with a passion to make
                the web a greater place.
            </h1>
            <HeroTextTypewriter
                firstTyperDone={firstTyperDone}
                onFirstTyperDone={done => setFirstTyperDone(done)}
            />

            <article className='max-w-[75ch] space-y-5'>
                <P>
                    I&apos;m a developer with over a year of experience. I like
                    to make awesome things on the web and see people enjoy and
                    benefit from them.
                </P>
                <P>
                    As a current software engineer at{' '}
                    <Anchor href='https://distin-gui.com' external>
                        Distin-Gui
                    </Anchor>
                    , I work on creating web experiences for clients small and
                    large.
                </P>
                <P>
                    Frontend development is my focus, and I love to develop some
                    CLI projects on the side for fun. I&apos;ve also been
                    recently interested in reading books about software
                    development, such as{' '}
                    <Anchor
                        href='https://www.oreilly.com/library/view/the-clean-coder/9780132542913'
                        external
                    >
                        Clean Coder
                    </Anchor>
                    <em> (highly recommend btw).</em>
                </P>
            </article>

            <Socials />
        </Section>
    )
}

const linkedinLabel = 'LinkedIn'
const githubLabel = 'GitHub'

function Socials() {
    return (
        <div className='mt-16 flex flex-wrap gap-2'>
            <div className='me-8 contents'>
                <IconLink
                    href={githubProfileUrl}
                    aria-label={githubLabel}
                    title={githubLabel}
                    external
                >
                    <FaGithub role='img' aria-label={githubLabel} />
                </IconLink>
                <IconLink
                    href='https://www.linkedin.com/in/abdullah-zd'
                    aria-label={linkedinLabel}
                    title={linkedinLabel}
                    external
                >
                    <FaLinkedin role='img' aria-label={linkedinLabel} />
                </IconLink>
            </div>

            <BtnLink href='mailto:abdullahzeidan@gmail.com' attractive>
                <MdPersonOutline className='text-xl' /> Hire me
            </BtnLink>
        </div>
    )
}

function HeroTextTypewriter({
    firstTyperDone,
    onFirstTyperDone,
}: {
    firstTyperDone: boolean
    onFirstTyperDone: (done: boolean) => void
}) {
    const endFirstTypewriter = () => onFirstTyperDone(true)

    return (
        <H1 aria-hidden className='mb-5 max-w-xl !leading-snug md:mb-16'>
            <strong className='mb-4 block text-4xl font-extrabold sm:text-5xl md:text-6xl'>
                {firstTyperDone ? (
                    <>I&apos;m Abdullah.</>
                ) : (
                    <>
                        I&apos;m{' '}
                        <Typewriter
                            options={{ delay: 80 }}
                            onInit={typewriter => {
                                typewriter
                                    .pauseFor(250)
                                    .typeString('Abdullah.')
                                    .pauseFor(250)
                                    .callFunction(endFirstTypewriter)
                                    .start()
                            }}
                        />
                    </>
                )}
            </strong>
            <div>
                A dev with <wbr />
                <span className='inline-block'>a passion</span>
            </div>
            <div>
                {' '}
                to make <wbr />
                <span className='inline-block'>the web a</span>
            </div>
            <div className='min-h-[5rem]'>
                {firstTyperDone && (
                    <Typewriter
                        options={{ delay: 80, deleteSpeed: 20 }}
                        onInit={typewriter => {
                            const stringToDelete = 'cooler...'
                            typewriter
                                .pauseFor(500)
                                .typeString(stringToDelete)
                                .pauseFor(1000)
                                .deleteChars(stringToDelete.length)
                                .pauseFor(250)
                                .typeString('greater place.')
                                .start()
                        }}
                    />
                )}
            </div>
        </H1>
    )
}
