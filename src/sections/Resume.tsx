import { RiDriveLine, RiDownloadCloud2Line } from 'react-icons/ri';
import Container from '@layouts/Container';
import H2 from '@components/Typography/H2';
import Section from '@components/Section';
import Subheading from '@components/Typography/Subheading';
import BtnLink from '@components/BtnLink';

const title = 'Resume';
export default function Resume() {
    return (
        <Container>
            <Section id="resume" aria-label={title}>
                <H2>{title}</H2>
                <Subheading>You can view my resume or download it directly!</Subheading>
                <div className="flex gap-6">
                    <BtnLink href="#" className="flex-grow">
                        <RiDriveLine className="text-xl" /> View on GDrive
                    </BtnLink>
                    <BtnLink href="#" className="flex-grow">
                        <RiDownloadCloud2Line className="text-xl" /> Download
                    </BtnLink>
                </div>
            </Section>
        </Container>
    );
}
