import { MDXRemote, type MDXRemoteProps } from 'next-mdx-remote/rsc'
import rehypeAutolinkHeadings, {
    type Options as AutolinkHeadingsOpts,
} from 'rehype-autolink-headings'
import rehypeImgSize, { type Options as ImgSizeOpts } from 'rehype-img-size'
import rehypePrettyCode, {
    type Options as PrettyCodeOpts,
} from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import mdxComponents from '@/components/mdx'

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

export default function CustomMDXRemote(
    props: Omit<MDXRemoteProps, 'options'>,
) {
    return (
        <MDXRemote
            {...props}
            components={mdxComponents}
            options={{
                mdxOptions: {
                    remarkPlugins: [remarkGfm],
                    rehypePlugins: [
                        rehypeSlug,
                        [rehypeImgSize as any, imgSizeOptions],
                        [rehypePrettyCode, prettyCodeOpts],
                        [rehypeAutolinkHeadings, autolinkHeadingsOpts],
                    ],
                },
            }}
        />
    )
}
