import BlogSection from '@/components/BlogSection'
import HR from '@/components/HR'
import HeroSection from '@/components/HeroSection'
import Projects from '@/components/Projects'
import Technologies from '@/components/Technologies'
import Container from '@/components/layouts/Container'

export default function IndexPage() {
    return (
        <Container>
            <HeroSection />
            <HR />
            <Projects />
            <Technologies />
            <BlogSection />
        </Container>
    )
}
