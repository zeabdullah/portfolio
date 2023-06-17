import { useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdPersonOutline } from 'react-icons/md'
import Typewriter from 'typewriter-effect'
import { githubProfileUrl } from '@/common/variables'
import BtnLink from '@/components/BtnLink'
import IconLink from '@/components/IconLink'
import Section from '@/components/Section'
import Anchor from '@/components/Typography/Anchor'
import P from '@/components/Typography/P'

const sectionLabel = 'header-heading'

export default function HeroSection() {
    const [firstTyperDone, setFirstTyperDone] = useState(false)
    const endFirstTypewriter = () => setFirstTyperDone(true)

    return (
        <Section id='header' role='banner' aria-labelledby={sectionLabel}>
            <h1
                id={sectionLabel}
                className='mb-12 max-w-xl text-3xl font-medium !leading-snug sm:text-4xl md:mb-16 md:max-w-3xl md:text-5xl'
            >
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
                A dev with a passion to{' '}
                {firstTyperDone && (
                    <Typewriter
                        options={{ delay: 80, deleteSpeed: 20 }}
                        onInit={typewriter => {
                            typewriter
                                .pauseFor(250)
                                .typeString('make the web a cooler...')
                                .pauseFor(1000)
                                .deleteChars(9)
                                .pauseFor(250)
                                .typeString('greater place.')
                                .start()
                        }}
                    />
                )}
            </h1>
            <article>
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
                    </Anchor>{' '}
                    <em>(highly recommend btw).</em>
                </P>
            </article>
            <Socials />
        </Section>
    )
}

const linkedinLabel = 'LinkedIn'
const githubLabel = 'GitHub'

const Socials: React.FC = () => (
    <div className='mt-16 flex flex-wrap gap-2'>
        <div className='mr-8 contents'>
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
