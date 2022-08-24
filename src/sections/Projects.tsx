import Container from '@layouts/Container';
import Subheading from '@components/Typography/Subheading';
import ProjectCards from '@components/ProjectCards';
import H2 from '@components/Typography/H2';
import Section from '@components/Section';

const title = 'Projects';
export default function Projects() {
    return (
        <Container>
            <Section id="projects" aria-label={title}>
                <H2>{title}</H2>
                <Subheading>A collection of my projects that I have developed</Subheading>
                <ProjectCards />
            </Section>
        </Container>
    );
}
