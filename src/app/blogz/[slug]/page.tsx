import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'
import rehypeAutolinkHeadings, {
    type Options as AutolinkHeadingsOpts,
} from 'rehype-autolink-headings'
import rehypeImgSize, { type Options as ImgSizeOpts } from 'rehype-img-size'
import rehypePrettyCode, {
    type Options as PrettyCodeOpts,
} from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import PostDate from '@/components/PostDate'
import PostNotPublishedAlert from '@/components/PostNotPublishedAlert'
import Section from '@/components/Section'
import Seo from '@/components/Seo'
import Container from '@/components/layouts/Container'
import mdxComponents from '@/components/mdx'
import H1 from '@/components/typography/H1'
import { filterPublishedPosts, getAllPosts, getPostBySlug } from '@/utils/mdx'

const prettyCodeOpts: PrettyCodeOpts = {
    theme: 'one-dark-pro',
}
const imgSizeOptions: ImgSizeOpts = {
    dir: 'public',
}
const autolinkHeadingsOpts: AutolinkHeadingsOpts = {
    behavior: 'prepend',
    properties: {
        'aria-label': 'Link to section',
        'className':
            "relative text-current no-underline before:absolute before:ms-[-1em] before:text-brand-500 before:opacity-0 before:transition-opacity before:content-['#'] group-hover:before:opacity-100 hocus:before:opacity-100",
    },
}

export function generateStaticParams() {
    return getAllPosts()
        .filter(filterPublishedPosts)
        .map(post => ({ slug: post.slug }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = getPostBySlug(params.slug)

    return (
        <>
            <Seo title={`${post.title} | Abdullah Zeidan`} />

            <Container>
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
                        <MDXRemote
                            source={post.content}
                            components={mdxComponents}
                            options={{
                                mdxOptions: {
                                    remarkPlugins: [remarkGfm],
                                    rehypePlugins: [
                                        rehypeSlug,
                                        [rehypeImgSize as any, imgSizeOptions],
                                        [rehypePrettyCode, prettyCodeOpts],
                                        [
                                            rehypeAutolinkHeadings,
                                            autolinkHeadingsOpts,
                                        ],
                                    ],
                                },
                            }}
                        />
                    </article>
                </Section>
            </Container>
        </>
    )
}
