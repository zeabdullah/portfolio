import BlogSection from '@/components/BlogSection'
import HR from '@/components/HR'
import HeroSection from '@/components/HeroSection'
import Projects from '@/components/Projects'
import Resume from '@/components/Resume'
import Technologies from '@/components/Technologies'
import Container from '@/components/layouts/Container'

export default function IndexPage() {
    return (
        <Container>
            <HeroSection />
            <HR />
            <Projects />
            <Technologies />
            <HR />
            <Resume />
            <HR />
            <BlogSection />
        </Container>
    )
}
