import { useState } from 'react';
import cn from 'clsx';
import Typewriter from 'typewriter-effect';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';
import IconLink from '@components/IconLink';
import BtnLink from '@components/BtnLink';
import Section from '@components/Section';
import P from '@components/Typography/P';
import Anchor from '@components/Typography/Anchor';

const sectionLabel = 'header-heading';
export default function Header() {
    const [firstTyperDone, setFirstTyperDone] = useState(false);
    function endFirstTypewriter() {
        setFirstTyperDone(true);
    }

    return (
        <Section id="header" aria-labelledby={sectionLabel}>
            <h1
                id={sectionLabel}
                className={cn(
                    'text-3xl sm:text-4xl md:text-5xl font-medium !leading-snug',
                    'max-w-xl md:max-w-3xl',
                    'mb-12 md:mb-16',
                )}
            >
                <strong
                    className={cn(
                        'block',
                        'font-extrabold text-4xl sm:text-5xl md:text-6xl',
                        'mb-4',
                    )}
                >
                    {firstTyperDone ? (
                        <>I'm Abdullah.</>
                    ) : (
                        <Typewriter
                            options={{ delay: 80 }}
                            onInit={typewriter => {
                                typewriter
                                    .pauseFor(500)
                                    .typeString("I'm Abdullah.")
                                    .pauseFor(500)
                                    .callFunction(endFirstTypewriter)
                                    .start();
                            }}
                        />
                    )}
                </strong>
                A dev with a passion to{' '}
                {firstTyperDone && (
                    <Typewriter
                        options={{ delay: 100, deleteSpeed: 40 }}
                        onInit={typewriter => {
                            typewriter
                                .pauseFor(250)
                                .typeString('make the web a nicer...')
                                .pauseFor(1500)
                                .deleteChars(8)
                                .typeString('cooler 😎')
                                .pauseFor(1000)
                                .deleteChars(9)
                                .typeString('greater place.')
                                .start();
                        }}
                    />
                )}
            </h1>
            <article>
                <P>
                    I'm a developer with over a year of experience. I like to make awesome
                    things on the web and see people enjoy and benefit from them.
                </P>
                <P>
                    I'm currently a software engineer at{' '}
                    <Anchor
                        href="https:distin-gui.com"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        Distin-Gui
                    </Anchor>
                    , working on creating web experiences for clients small and large.
                </P>
                <P>
                    Frontend development is my focus, and I love to develop some CLI projects
                    on the side for fun. I've also been recently interested in reading books
                    about software development, such as{' '}
                    <Anchor
                        href="https://www.oreilly.com/library/view/the-clean-coder/9780132542913"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        Clean Coder
                    </Anchor>{' '}
                    <em>(highly recommend btw).</em>
                </P>
            </article>
            <div className={cn('flex gap-2 flex-wrap')}>
                <IconLink
                    href="https://www.github.com/AbdullahZeidan"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="GitHub"
                    title="GitHub"
                >
                    <FaGithub />
                </IconLink>
                <IconLink
                    href="https://www.linkedin.com/in/abdullah-z-b4653a213/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="LinkedIn"
                    title="LinkedIn"
                >
                    <FaLinkedin />
                </IconLink>

                <BtnLink href="mailto:abdullahzeidan@gmail.com">
                    <MdAlternateEmail /> Email Me
                </BtnLink>
            </div>
        </Section>
    );
}
