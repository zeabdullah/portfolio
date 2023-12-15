import { FaGithub } from 'react-icons/fa'
import { SiNextdotjs } from 'react-icons/si'
import { navAndFooterClassName } from '@/utils/classnames'
import { githubProfileUrl } from '@/utils/config'
import { cn } from '@/utils/css'

const githubLabel = 'GitHub'

export default function Footer() {
    return (
        <footer
            role='contentinfo'
            id='footer'
            className={cn(
                navAndFooterClassName,
                'space-y-4 border-t bg-neutral-100 text-center text-sm dark:bg-dark dark:text-light',
            )}
        >
            <p className='flex items-center justify-center'>
                <a
                    href='https://nextjs.org'
                    className='text-neutral-700 hover:text-brand-600 hover:underline dark:text-neutral-300 dark:hover:text-brand-500'
                    aria-label='Next.js'
                    title='Next.js'
                    target='_blank'
                    rel='noreferrer noopener'
                >
                    Powered by{' '}
                    <SiNextdotjs
                        aria-label='Next.js'
                        className='inline-block text-lg'
                    />
                </a>
            </p>
            <p>
                <a
                    href={`${githubProfileUrl}/zeabdullah.github.io`}
                    className='text-neutral-700 hover:text-brand-600 hover:underline dark:text-neutral-300 dark:hover:text-brand-500'
                    aria-label={githubLabel}
                    title={githubLabel}
                    target='_blank'
                    rel='noreferrer noopener'
                >
                    Source code on{' '}
                    <FaGithub
                        aria-label={githubLabel}
                        className='inline-block text-lg'
                    />
                </a>
            </p>
        </footer>
    )
}
