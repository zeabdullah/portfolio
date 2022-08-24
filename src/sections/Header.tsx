import cn from 'clsx';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';
import Container from '@layouts/Container';
import P from '@components/Typography/P';
import { linkBtnCls } from '@components/BtnLink';

const sectionLabel = 'header-heading';
const linkCls = cn(
    'p-2 rounded-md',
    'text-2xl text-gray-600 hover:text-black',
    'hover:bg-gray-200',
);

export default function Header() {
    return (
        <Container>
            <header id="header" aria-labelledby={sectionLabel}>
                <h1
                    id={sectionLabel}
                    className={cn(
                        'text-3xl sm:text-4xl md:text-5xl font-medium !leading-snug',
                        'mb-10',
                        'max-w-xl md:max-w-3xl',
                    )}
                >
                    <strong className="block font-extrabold text-4xl sm:text-5xl md:text-6xl mb-7">
                        I&apos;m Abdullah<span className="not-sr-only">_</span>
                    </strong>{' '}
                    A dev with a passion to make the web a cooler place.
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
                <div className={cn('flex gap-2 flex-wrap', 'my-7')}>
                    <a
                        href="https://www.github.com/AbdullahZeidan"
                        target="blank"
                        rel="noreferrer noopener"
                        className={linkCls}
                        aria-label="GitHub"
                        title="GitHub"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/abdullah-z-b4653a213/"
                        target="blank"
                        rel="noreferrer noopener"
                        className={linkCls}
                        aria-label="LinkedIn"
                        title="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>

                    <a
                        href="mailto:abdullahzeidan@gmail.com"
                        className={cn('flex items-center gap-2', linkBtnCls)}
                    >
                        <MdAlternateEmail className="text-lg" /> Email Me
                    </a>
                </div>
            </header>
        </Container>
    );
}
