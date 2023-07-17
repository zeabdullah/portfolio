import { type Post, allPosts } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Link from 'next/link'
import type {
    GetStaticPaths,
    GetStaticProps,
    InferGetStaticPropsType,
} from 'next/types'
import { FaArrowLeft } from 'react-icons/fa'
import PostDate from '@/components/PostDate'
import Section from '@/components/Section'
import Container from '@/components/layouts/Container'
import H1 from '@/components/typography/H1'

export const getStaticPaths: GetStaticPaths = () => {
    return {
        paths: allPosts.map(p => ({ params: { slug: p._raw.flattenedPath } })),
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps<
    { post: Post },
    { slug: string }
> = ({ params }) => {
    return {
        props: {
            post: allPosts.find(
                post => post._raw.flattenedPath === params?.slug,
            ) as Post,
        },
    }
}

const headerLabel = 'header-heading'

export default function BlogPostPage({
    post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    const MDXContent = useMDXComponent(post.body.code)

    return (
        <Container className='max-w-3xl'>
            <Section
                id='header'
                className='pt-6 md:pt-6'
                aria-labelledby={headerLabel}
            >
                <Link
                    href='/blog'
                    className='group mb-6 flex items-center gap-2 text-sm text-neutral-700 hover:text-brand-700 dark:text-neutral-400 dark:hover:text-brand-500'
                >
                    <FaArrowLeft className='transition-transform duration-200 group-hover:-translate-x-0.5' />
                    Back to main blog page
                </Link>

                <hgroup className='mb-12'>
                    <H1 className='mb-3 font-extrabold'>{post.title}</H1>
                    <PostDate>{post.date}</PostDate>
                </hgroup>

                <article className='prose prose-brand max-w-none dark:prose-invert'>
                    <MDXContent />
                </article>
            </Section>
        </Container>
    )
}
