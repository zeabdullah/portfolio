import { type PathLike } from 'fs'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

export interface PostFrontmatter {
    title: string
    date: Date
    isPublished: boolean
    description: string
}

export interface PostMeta extends PostFrontmatter {
    slug: string
}

export interface Post extends PostMeta {
    content: string
}

export const POSTS_DIR = path.join(process.cwd(), 'src', 'posts')

export function getMDXFiles(dir: PathLike) {
    try {
        return fs.readdirSync(dir).filter(file => path.extname(file) === '.mdx')
    } catch (err) {
        console.warn(
            'Failed to get list of MDX files:',
            err instanceof Error ? err.message : err,
        )
        return []
    }
}

export function getAllPosts(): Post[] {
    const mdxFiles = getMDXFiles(POSTS_DIR)

    return mdxFiles.map(filename => {
        const parsedMDX = parseMDX(filename)

        // `data` = the frontmatter
        // `content` = the md(x) content, excluding frontmatter
        const { title, date, isPublished, description } =
            parsedMDX.data as PostFrontmatter

        return {
            title,
            date,
            isPublished,
            description,
            slug: path.basename(filename, path.extname(filename)),
            content: parsedMDX.content,
        }
    })
}

export function getPostBySlug(slug: string): Post {
    const allPosts = getAllPosts()

    const matchingPost = allPosts.find(post => post.slug === slug)
    if (!matchingPost) {
        throw new Error(`No blog post found with slug '${slug}'`)
    }

    return matchingPost
}

export function parseMDX(file: string) {
    return matter.read(path.join(POSTS_DIR, file))
}

export function filterPublishedPosts(post: Post) {
    const isDevModeAndNotPublished =
        !post.isPublished && process.env.NODE_ENV === 'development'

    return isDevModeAndNotPublished || post.isPublished
}
