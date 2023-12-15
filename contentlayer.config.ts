import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypeAutolinkHeadings, {
    type Options as AutolinkHeadingsOptions,
} from 'rehype-autolink-headings'
import rehypeImgSize, { type Options as ImgSizeOptions } from 'rehype-img-size'
import rehypePrettyCode, {
    type Options as PrettyCodeOptions,
} from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

const Post = defineDocumentType(() => ({
    name: 'Post',
    contentType: 'mdx',
    filePathPattern: `**/*.mdx`,
    // Define the fields that will be inserted in the MDX frontmatter, giving type-safety
    fields: {
        title: { type: 'string', required: true },
        date: { type: 'date', required: true },
        isPublished: { type: 'boolean', required: true },
        pulseEffect: { type: 'boolean', required: false },
    },
    computedFields: {
        url: {
            type: 'string',
            resolve: post => `/blog/${post._raw.flattenedPath}`,
        },
    },
}))

const prettyCodeOpts: Partial<PrettyCodeOptions> = {
    theme: 'one-dark-pro',
}

const imgSizeOptions: ImgSizeOptions = {
    dir: 'public',
}

const autolinkHeadingsOpts: AutolinkHeadingsOptions = {
    behavior: 'prepend',
    properties: {
        className:
            "relative text-current no-underline before:absolute before:ms-[-1em] before:text-brand-500 before:opacity-0 before:transition-opacity before:content-['#'] group-hover:before:opacity-100 hocus:before:opacity-100",
    },
}

export default makeSource({
    contentDirPath: 'src/posts',
    documentTypes: [Post],
    mdx: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
            [rehypeSlug],
            [rehypeImgSize as never, imgSizeOptions],
            [rehypePrettyCode, prettyCodeOpts],
            [rehypeAutolinkHeadings, autolinkHeadingsOpts],
        ],
    },
})
