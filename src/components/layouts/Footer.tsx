import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import type { IconType } from 'react-icons/lib'
import { containerCls } from '@/utils/classnames'
import {
    GITHUB_PROFILE_URL,
    LINKEDIN_PROFILE_URL,
    MAIL_TO_ME,
} from '@/utils/config'
import { cn } from '@/utils/css'

const SOCIAL_LINKS: Array<{
    title: string
    icon: IconType
    href: string
}> = [
    {
        title: 'GitHub',
        icon: FaGithub,
        href: GITHUB_PROFILE_URL,
    },
    {
        title: 'LinkedIn',
        icon: FaLinkedin,
        href: LINKEDIN_PROFILE_URL,
    },
    {
        title: 'Email me',
        icon: FaEnvelope,
        href: MAIL_TO_ME,
    },
]

export default function Footer() {
    return (
        <footer
            role='contentinfo'
            id='footer'
            className='border-t border-neutral-200 bg-neutral-100 px-3.5 py-6 transition-[background-color] duration-300 dark:border-opacity-10 dark:bg-neutral-900 dark:text-light'
        >
            <div className={cn(containerCls)}>
                <div className='mb-8 flex items-center justify-between'>
                    <div className='select-none font-mono text-2xl font-extrabold opacity-50 transition duration-300 hover:opacity-100'>
                        {'<Z/>'}
                    </div>

                    <ul className='flex items-center gap-5'>
                        {SOCIAL_LINKS.map(({ title, href, icon: Icon }) => (
                            <li key={title}>
                                <a
                                    href={href}
                                    aria-label={title}
                                    title={title}
                                    target='_blank'
                                    rel='noreferrer noopener'
                                    className='text-2xl opacity-50 transition duration-200 hocus:opacity-100'
                                >
                                    <Icon role='img' />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='flex flex-wrap items-center justify-between gap-x-6 gap-y-2'>
                    <p className='opacity-70'>
                        &copy; {new Date().getUTCFullYear()} Abdullah Zeidan.
                        All rights reserved.
                    </p>
                    <div>
                        <a
                            href={`${GITHUB_PROFILE_URL}/portfolio`}
                            className='font-semibold hocus:underline'
                        >
                            Source code
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
