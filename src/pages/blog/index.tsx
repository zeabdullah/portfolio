// import { type Post, allPosts } from 'contentlayer/generated'
import { NextSeo } from 'next-seo'
import type { GetStaticProps, InferGetStaticPropsType } from 'next/types'
import React from 'react'
import PostCard from '@/components/PostCard'
import Section from '@/components/Section'
import Container from '@/components/layouts/Container'
import H1 from '@/components/typography/H1'

export const getStaticProps: GetStaticProps = async () => {
    const { compareDesc } = await import('date-fns')
    return {
        props: {
            posts: [], // posts: allPosts
            //     .filter(filterPublishedPosts)
            //     .sort((a, b) =>
            //         compareDesc(new Date(a.date), new Date(b.date)),
            //     ),
        },
    }
}

export const filterPublishedPosts = ({ isPublished }: any) => {
    const isDevModeAndNotPublished =
        !isPublished && process.env.NODE_ENV === 'development'

    return isDevModeAndNotPublished || isPublished
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
                    {posts.map((post: any) => (
                        <PostCard key={post._id} {...post} />
                    ))}
                </ul>
            </Section>
        </Container>
    )
}
