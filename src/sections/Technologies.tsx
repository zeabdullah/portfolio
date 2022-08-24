import Container from '@layouts/Container';
import H2 from '@components/Typography/H2';
import Section from '@components/Section';
import Subheading from '@components/Typography/Subheading';

const title = 'Technologies';
export default function Technologies() {
    return (
        <Container>
            <Section id="tech" aria-label={title} className="text-center">
                <H2>{title}</H2>
                <Subheading>
                    My arsenal of technologies that drive my day-to-day work.
                </Subheading>
            </Section>
        </Container>
    );
}
