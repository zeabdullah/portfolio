import { type Post } from 'contentlayer/generated'
import Link from 'next/link'
import PostDate from './PostDate'

// import P from './typography/P'

export default function PostCard(post: Post) {
    return (
        <li className='mb-10'>
            <h2 className='relative mb-1 line-clamp-2 w-max max-w-xl pe-4 text-2xl font-semibold text-brand-700 transition-colors hover:text-dark hover:underline dark:text-brand-500 dark:hover:text-light'>
                <Link href={post.url}>{post.title}</Link>
            </h2>
            <PostDate date={post.date} />
        </li>
    )
}
