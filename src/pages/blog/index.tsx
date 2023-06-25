import Link from 'next/link'
import React from 'react'
import BlinkingCursor from '@/components/BlinkingCursor'
import Section from '@/components/Section'
import Container from '@/components/layouts/Container'
import H1 from '@/components/typography/H1'
import H2 from '@/components/typography/H2'

const headerLabel = 'header-heading'

export default function BlogPage() {
    return (
        <Container>
            <Section id='header' role='banner' aria-labelledby={headerLabel}>
                <H1 id={headerLabel} className='mb-8 font-extrabold'>
                    Blog
                </H1>
                <H2 className='mb-12'>
                    Under Construction
                    <BlinkingCursor type='|' />
                </H2>

                <ul>
                    <li>
                        <Link href='/blog/test'>Test</Link>
                    </li>
                </ul>
            </Section>
        </Container>
    )
}
