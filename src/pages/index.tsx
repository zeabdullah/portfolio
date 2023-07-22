import dynamic from 'next/dynamic'
import HR from '@/components/HR'
import HeroSection from '@/components/HeroSection'
import Projects from '@/components/Projects'
import Technologies from '@/components/Technologies'
import Container from '@/components/layouts/Container'

const Resume = dynamic(() => import('@/components/Resume'))

export default function IndexPage() {
    return (
        <Container>
            <HeroSection />
            <HR />
            <Projects />
            <Technologies />
            <HR />
            <Resume />
        </Container>
    )
}
