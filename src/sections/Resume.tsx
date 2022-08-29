import { RiDriveLine, RiDownloadCloud2Line, RiExternalLinkLine } from 'react-icons/ri';
import H2 from '@components/Typography/H2';
import Section from '@components/Section';
import Subtitle from '@components/Typography/Subtitle';
import BtnLink from '@components/BtnLink';
import SectionHeading from '@components/SectionHeading';

const title = 'Resume';
const resumePath = '/doc/resume.pdf';

export default function Resume() {
    return (
        <Section id="resume" aria-label={title}>
            <SectionHeading>
                <H2>{title}</H2>
                <Subtitle>You can view my resume or download it directly.</Subtitle>
            </SectionHeading>

            <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2">
                <BtnLink
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://drive.google.com/file/d/1F46afVwdRy_cAWP1FPXgCc2enqv-0rQp/view?usp=sharing"
                    className="flex-grow"
                >
                    <RiDriveLine className="text-lg" /> View on GDrive{' '}
                </BtnLink>
                <BtnLink href={resumePath} className="flex-grow">
                    <RiDownloadCloud2Line className="text-lg" /> Download
                </BtnLink>
            </div>

            <div className="resume-container border-2 border-neutral-400 mt-8 rounded-xl overflow-hidden">
                <embed
                    src={resumePath}
                    type="application/pdf"
                    width="100%"
                    className="min-h-[50rem]"
                />
            </div>
        </Section>
    );
}
