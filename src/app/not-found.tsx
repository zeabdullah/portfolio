import { generateSomeMeta } from 'seo.config'
import BtnLink from '@/components/BtnLink'
import Section from '@/components/Section'
import Container from '@/components/layouts/Container'
import H1 from '@/components/typography/H1'
import P from '@/components/typography/P'
import H2Typewriter from '../components/H2Typewriter'

export const metadata = generateSomeMeta({
    title: '404',
    description: "This page ain't what you lookin' for, chief.",
})

export default function NotFoundPage() {
    return (
        <Container>
            <Section id='header' aria-labelledby='header-heading'>
                <H1 id='header-heading' className='mb-12 font-extrabold'>
                    404
                </H1>

                <H2Typewriter text='Page Not Found' />
                <P>This ain&apos;t it, chief...</P>

                <BtnLink href='/' className='mt-4' attractive>
                    Back to home page
                </BtnLink>
            </Section>
        </Container>
    )
}
