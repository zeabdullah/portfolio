import { useState } from 'react';
import cn from 'clsx';
import Typewriter from 'typewriter-effect';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';
import P from '@components/Typography/P';
import BtnLink from '@components/BtnLink';
import Section from '@components/Section';

const sectionLabel = 'header-heading';
const linkCls = cn(
    'p-2 rounded-md',
    'text-2xl text-gray-600 hover:text-black',
    'hover:bg-gray-200',
);

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
                    'mb-16',
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
                                .pauseFor(1000)
                                .deleteChars(8)
                                .typeString('cooler 😎')
                                .pauseFor(250)
                                .deleteChars(9)
                                .typeString('greater place.')
                                .start();
                        }}
                    />
                )}
            </h1>
            <article>
                <P>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
                    repudiandae, veniam dolore sit ipsa nostrum, laboriosam assumenda
                    voluptates voluptate provident est sunt pariatur odio vel corrupti
                    excepturi consectetur nihil voluptatibus.
                </P>
                <P>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
                    repudiandae, veniam dolore sit uptatibus.
                </P>
            </article>
            <div className={cn('flex gap-2 flex-wrap')}>
                <a
                    href="https://www.github.com/AbdullahZeidan"
                    target="_blank"
                    rel="noreferrer noopener"
                    className={linkCls}
                    aria-label="GitHub"
                    title="GitHub"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/abdullah-z-b4653a213/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className={linkCls}
                    aria-label="LinkedIn"
                    title="LinkedIn"
                >
                    <FaLinkedin />
                </a>

                <BtnLink href="mailto:abdullahzeidan@gmail.com">
                    <MdAlternateEmail /> Email Me
                </BtnLink>
            </div>
        </Section>
    );
}
