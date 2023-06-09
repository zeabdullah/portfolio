import ProjectCards from '@/components/ProjectCards/ProjectCards'
import Section from '@/components/Section'
import SectionHeading from '@/components/SectionHeading'
import H2 from '@/components/Typography/H2'
import Subtitle from '@/components/Typography/Subtitle'

const title = 'Projects'
export default function Projects() {
    return (
        <Section id='projects' aria-label={title}>
            <SectionHeading>
                <H2>{title}</H2>
                <Subtitle>
                    A collection of projects that I have developed.
                </Subtitle>
            </SectionHeading>

            <ProjectCards />
        </Section>
    )
}
