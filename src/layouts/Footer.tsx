import clsx from 'clsx'
import { FaGithub } from 'react-icons/fa/index.js'
import AstroLogo from '@/components/AstroLogo'
import Anchor from '@/components/Typography/Anchor'
import { navAndFooterCls } from 'common/classnames'
import { githubProfileUrl } from 'common/variables'

const githubLabel = 'GitHub'

export default function Footer() {
    return (
        <footer
            role='contentinfo'
            id='footer'
            className={clsx(
                navAndFooterCls,
                'space-y-4',
                'text-sm text-center',
                'bg-neutral-100 dark:bg-dark dark:text-light',
                'border-t',
            )}
        >
            <p>
                Powered by{' '}
                <Anchor
                    className='p-1 rounded'
                    href='https://astro.build'
                    aria-label='Astro'
                    title='Astro'
                    external
                >
                    <AstroLogo className='inline text-2xl fill-dark dark:fill-light' />
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
