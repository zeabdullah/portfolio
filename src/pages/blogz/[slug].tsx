import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import type { InferGetStaticPropsType } from 'next/types'
import { FaArrowLeft } from 'react-icons/fa'
import PostDate from '@/components/PostDate'
import PostNotPublishedAlert from '@/components/PostNotPublishedAlert'
import Section from '@/components/Section'
import Container from '@/components/layouts/Container'
import mdxComponents from '@/components/mdx'
import H1 from '@/components/typography/H1'
import { filterPublishedPosts, getAllPosts } from '@/utils/mdx'

export async function getStaticPaths() {
    const allPosts = getAllPosts()
    return {
        paths: allPosts
            .filter(filterPublishedPosts)
            .map(post => ({ params: { slug: post.slug } })),
        fallback: false,
    }
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
    const allPosts = getAllPosts()

    const matchingPost = allPosts.find(post => post.slug === params.slug)
    if (!matchingPost) {
        throw new Error(`Could not find post of slug '${params.slug}'`)
    }
    const serializedContent = await serialize(matchingPost.content)

    return {
        props: {
            post: { ...matchingPost, source: serializedContent },
        },
    }
}

export default function BlogPostPage({
    post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <Container className='max-w-3xl'>
            <NextSeo title={`${post.title} | Abdullah Zeidan`} />
            <Section
                id='header'
                className='pt-6 md:pt-6'
                aria-labelledby='header-heading'
            >
                <Link
                    href='/blog'
                    className='group mb-8 flex items-center gap-2 text-sm text-neutral-700 hover:text-brand-700 dark:text-neutral-400 dark:hover:text-brand-500'
                >
                    <FaArrowLeft className='transition-transform duration-200 group-hover:-translate-x-0.5' />
                    Back to main blog page
                </Link>

                {process.env.NODE_ENV === 'development' &&
                    !post.isPublished && (
                        <div className='mb-8'>
                            <PostNotPublishedAlert />
                        </div>
                    )}

                <hgroup className='mb-12'>
                    <H1 id='header-heading' className='mb-3 font-extrabold'>
                        {post.title}
                    </H1>
                    <PostDate date={post.date}>Posted on</PostDate>
                </hgroup>

                <article className='prose prose-brand max-w-none dark:prose-invert lg:prose-lg prose-headings:font-semibold prose-p:text-base/[1.7]'>
                    <MDXRemote {...post.source} components={mdxComponents} />
                </article>
            </Section>
        </Container>
    )
}
