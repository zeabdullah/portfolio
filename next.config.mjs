// import { withContentlayer } from 'next-contentlayer'
import createMDX from '@next/mdx'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeImgSize from 'rehype-img-size'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

/** @type {import('rehype-pretty-code').Options} */
const prettyCodeOpts = {
    theme: 'one-dark-pro',
}

/** @type {import('rehype-img-size').Options} */
const imgSizeOptions = {
    dir: 'public',
}

/** @type {import('rehype-autolink-headings').Options} */
const autolinkHeadingsOpts = {
    behavior: 'prepend',
    properties: {
        className:
            "relative text-current no-underline before:absolute before:ms-[-1em] before:text-brand-500 before:opacity-0 before:transition-opacity before:content-['#'] group-hover:before:opacity-100 hocus:before:opacity-100",
    },
}

const withMDX = createMDX({
    options: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
            [rehypeSlug],
            [rehypeImgSize, imgSizeOptions],
            [rehypePrettyCode, prettyCodeOpts],
            [rehypeAutolinkHeadings, autolinkHeadingsOpts],
        ],
    },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    experimental: {
        mdxRs: true,
    },
}

export default withMDX(nextConfig)
