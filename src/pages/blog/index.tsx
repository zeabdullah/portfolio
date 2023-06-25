import { type Post, allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import type { GetStaticProps, InferGetStaticPropsType } from 'next/types'
import React from 'react'
import PostCard from '@/components/PostCard'
import Section from '@/components/Section'
import Container from '@/components/layouts/Container'
import H1 from '@/components/typography/H1'

export const getStaticProps: GetStaticProps<{ posts: Post[] }> = () => {
    return {
        props: {
            posts: allPosts.sort((a, b) =>
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
            <Section id='header' role='banner' aria-labelledby={headerLabel}>
                <H1 id={headerLabel} className='mb-12 font-extrabold'>
                    Blog
                </H1>

                <ul className='space-y-6'>
                    {posts
                        .filter(post => post.isPublished)
                        .map(post => (
                            <PostCard key={post._id} {...post} />
                        ))}
                </ul>
            </Section>
        </Container>
    )
}
