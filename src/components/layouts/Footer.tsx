import { FaGithub } from 'react-icons/fa'
import { navAndFooterClassName } from '@/common/classnames'
import { githubProfileUrl } from '@/common/variables'
import AstroLogo from '@/components/AstroLogo'
import Anchor from '@/components/Typography/Anchor'
import { cn } from '@/utils/dom'

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
