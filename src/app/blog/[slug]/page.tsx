import Link from 'next/link'
import type { Metadata } from 'next/types'
import { FaArrowLeft } from 'react-icons/fa'
import { generateSomeMeta } from 'seo.config'
import PostDate from '@/components/PostDate'
import PostNotPublishedAlert from '@/components/PostNotPublishedAlert'
import Section from '@/components/Section'
import Container from '@/components/layouts/Container'
import CustomMDXRemote from '@/components/mdx/MDXRemote'
import H1 from '@/components/typography/H1'
import { filterPublishedPosts, getAllPosts, getPostBySlug } from '@/utils/mdx'

export function generateStaticParams() {
    return getAllPosts()
        .filter(filterPublishedPosts)
        .map(post => ({ slug: post.slug }))
}

export function generateMetadata({
    params,
}: {
    params: { slug: string }
}): Metadata {
    const { title, description } = getPostBySlug(params.slug)

    return generateSomeMeta({ title, description })
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = getPostBySlug(params.slug)

    return (
        <Container className='max-w-3xl'>
            <Section
                id='header'
                className='pt-6 md:pt-6'
                aria-labelledby='header-heading'
            >
                <div>
                    <Link
                        href='/blog'
                        className='group mb-8 inline-flex items-center gap-2 text-sm text-neutral-700 hover:text-brand-700 hover:underline dark:text-neutral-400 dark:hover:text-brand-500'
                    >
                        <FaArrowLeft className='transition-transform duration-200 group-hover:-translate-x-0.5' />
                        Back to main blog page
                    </Link>
                </div>

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
                    <CustomMDXRemote source={post.content} />
                </article>
            </Section>
        </Container>
    )
}
