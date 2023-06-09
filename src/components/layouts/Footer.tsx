import clsx from 'clsx'
import { FaGithub } from 'react-icons/fa'
import { navAndFooterCls } from '@/common/classnames'
import { githubProfileUrl } from '@/common/variables'
import AstroLogo from '@/components/AstroLogo'
import Anchor from '@/components/Typography/Anchor'

const githubLabel = 'GitHub'

export default function Footer() {
    return (
        <footer
            role='contentinfo'
            id='footer'
            className={clsx(
                navAndFooterCls,
                'space-y-4',
                'text-center text-sm',
                'bg-neutral-100 dark:bg-dark dark:text-light',
                'border-t',
            )}
        >
            <p>
                Powered by{' '}
                <Anchor
                    className='rounded p-1'
                    href='https://astro.build'
                    aria-label='Astro'
                    title='Astro'
                    external
                >
                    <AstroLogo className='inline fill-dark text-2xl dark:fill-light' />
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
