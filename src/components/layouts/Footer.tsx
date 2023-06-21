import { FaGithub } from 'react-icons/fa'
import { SiNextdotjs } from 'react-icons/si'
import { navAndFooterClassName } from '@/common/classnames'
import { githubProfileUrl } from '@/common/variables'
import Anchor from '@/components/typography/Anchor'
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
                Powered by{' '}
                <Anchor
                    className='ms-2 rounded p-1'
                    href='https://nextjs.org'
                    aria-label='Next.js'
                    title='Next.js'
                    external
                >
                    <SiNextdotjs className='text-xl' />
                </Anchor>
            </p>
            <p>
                <Anchor
                    href={`${githubProfileUrl}/zeabdullah.github.io`}
                    title={githubLabel}
                >
                    Source code on{' '}
                    <FaGithub
                        aria-label={githubLabel}
                        className='inline text-lg'
                    />
                </Anchor>
            </p>
        </footer>
    )
}
