import { generateSomeMeta } from 'seo.config'
import Section from '@/components/Section'
import Container from '@/components/layouts/Container'
import H1 from '@/components/typography/H1'
import P from '@/components/typography/P'
import H2Typewriter from '../../components/H2Typewriter'

export const metadata = generateSomeMeta({
    title: 'Recipes',
    description:
        'Find snippets and recipes of code for inspiration or quick setup.',
})

export default function RecipesPage() {
    return (
        <Container>
            <Section id='header' aria-labelledby='header-heading'>
                <H1 id='header-heading' className='mb-12 font-extrabold'>
                    Recipes
                </H1>

                <H2Typewriter text='Under Construction' />
                <P>Stay tuned. 🛠️ 🚧</P>
            </Section>
        </Container>
    )
}
