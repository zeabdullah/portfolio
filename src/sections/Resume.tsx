import { RiDriveLine, RiDownloadCloud2Line } from 'react-icons/ri';
import H2 from '@components/Typography/H2';
import Section from '@components/Section';
import Subtitle from '@components/Typography/Subtitle';
import BtnLink from '@components/BtnLink';
import SectionHeading from '@components/SectionHeading';

const title = 'Resume';
export default function Resume() {
    return (
        <Section id="resume" aria-label={title}>
            <SectionHeading>
                <H2>{title}</H2>
                <Subtitle>You can view my resume or download it directly!</Subtitle>
            </SectionHeading>
            <div className="flex gap-6">
                <BtnLink href="#" className="flex-grow">
                    <RiDriveLine className="text-xl" /> View on GDrive
                </BtnLink>
                <BtnLink href="#" className="flex-grow">
                    <RiDownloadCloud2Line className="text-xl" /> Download
                </BtnLink>
            </div>
        </Section>
    );
}
