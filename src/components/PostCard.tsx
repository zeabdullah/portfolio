import { type Post } from 'contentlayer/generated'
import Link from 'next/link'
import PostDate from './PostDate'

export default function PostCard(post: Post) {
    return (
        <li className='mb-10'>
            <h2 className='relative mb-1 line-clamp-2 max-w-xl pe-4 text-xl font-semibold text-brand-700 transition-colors hover:text-dark hover:underline dark:text-brand-500 dark:hover:text-light'>
                <Link href={post.url}>{post.title}</Link>{' '}
            </h2>
            <PostDate date={post.date} />
        </li>
    )
}
