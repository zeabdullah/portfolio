import { type Post, allPosts } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import type {
    GetStaticPaths,
    GetStaticProps,
    InferGetStaticPropsType,
} from 'next/types'
import { FaArrowLeft } from 'react-icons/fa'
import PostDate from '@/components/PostDate'
import PostNotPublishedAlert from '@/components/PostNotPublishedAlert'
import Section from '@/components/Section'
import Container from '@/components/layouts/Container'
import mdxComponents from '@/components/mdx'
import H1 from '@/components/typography/H1'
import { filterPublishedPosts } from '.'

export const getStaticPaths: GetStaticPaths = () => {
    return {
        paths: allPosts
            .filter(filterPublishedPosts)
            .map(post => ({ params: { slug: post._raw.flattenedPath } })),
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps<
    { post: Post },
    { slug: string }
> = ({ params }) => {
    const matchingPost = allPosts.find(
        post => post._raw.flattenedPath === params?.slug,
    )
    if (!matchingPost) {
        throw new Error(`Could not find post of slug '${params?.slug}'`)
    }

    return {
        props: { post: matchingPost },
    }
}

export default function BlogPostPage({
    post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    const MDXContent = useMDXComponent(post.body.code)

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
                    <PostDate>{post.date}</PostDate>
                </hgroup>

                <article className='prose prose-brand max-w-none dark:prose-invert lg:prose-lg prose-h4:font-bold'>
                    <MDXContent components={mdxComponents} />
                </article>
            </Section>
        </Container>
    )
}
