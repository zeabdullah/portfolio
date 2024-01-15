import compareDesc from 'date-fns/compareDesc'
import { generateSomeMeta } from 'seo.config'
import PostCard from '@/components/PostCard'
import Section from '@/components/Section'
import Container from '@/components/layouts/Container'
import H1 from '@/components/typography/H1'
import { filterPublishedPosts, getAllPosts } from '@/utils/mdx'

export const metadata = generateSomeMeta({
    title: 'Blog',
    description:
        'A place to share my knowledge with the world. Come and read interesting web dev topics like animations, accessibility, and more.',
})

const headerLabelId = 'header-heading'

export default function BlogPage() {
    const posts = getAllPosts()
        .filter(filterPublishedPosts)
        .sort((a, b) => compareDesc(a.date, b.date))

    return (
        <Container>
            <Section id='header' aria-labelledby={headerLabelId}>
                <H1 id={headerLabelId} className='mb-12 font-extrabold'>
                    Blog
                </H1>

                <ul className='space-y-6'>
                    {posts.map(post => (
                        <PostCard key={post.slug} {...post} />
                    ))}
                </ul>
            </Section>
        </Container>
    )
}
