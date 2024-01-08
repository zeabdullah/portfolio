import { NextSeo } from 'next-seo'
import type { InferGetStaticPropsType } from 'next/types'
import PostCard from '@/components/PostCard'
import Section from '@/components/Section'
import Container from '@/components/layouts/Container'
import H1 from '@/components/typography/H1'
import { filterPublishedPosts, getAllPosts } from '@/utils/mdx'

export async function getStaticProps() {
    const { compareDesc } = await import('date-fns')

    const allPosts = await getAllPosts()

    return {
        props: {
            posts: allPosts
                .filter(filterPublishedPosts)
                .sort((a, b) =>
                    compareDesc(new Date(a.date), new Date(b.date)),
                ),
        },
    }
}

const headerLabel = 'header-heading'

export default function BlogIndexPage({
    posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <Container>
            <NextSeo
                title='Blog | Abdullah Zeidan'
                description='A place to share my knowledge with the world. Come and read interesting web dev topics like animations, accessibility, and more.'
            />

            <Section id='header' aria-labelledby={headerLabel}>
                <H1 id={headerLabel} className='mb-12 font-extrabold'>
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
