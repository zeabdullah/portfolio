import compareDesc from 'date-fns/compareDesc'
import Link from 'next/link'
import { useId } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { filterPublishedPosts, getAllPosts } from '@/utils/mdx'
import PostCard from './PostCard'
import Section from './Section'
import SectionHeading from './SectionHeading'
import H2 from './typography/H2'
import Subtitle from './typography/Subtitle'

export default function BlogSection() {
    const labelId = useId()

    const posts = getAllPosts()
        .filter(filterPublishedPosts)
        .sort((a, b) => compareDesc(a.date, b.date))
        .slice(0, 4) // Get only the first 4 posts (Rest should be visible on `/blog` page)

    return (
        <Section id='blog' aria-labelledby={labelId}>
            <div className='mx-auto mb-4 flex items-center justify-center'></div>

            <SectionHeading>
                <H2 id={labelId}>Read my blog</H2>
                <Subtitle>
                    I write a bit from time to time. Check my posts out.
                </Subtitle>
            </SectionHeading>

            <ul className='mb-10 space-y-6'>
                {posts.map(post => (
                    <PostCard key={post.slug} {...post} />
                ))}
            </ul>

            <div>
                <Link
                    href='/blog'
                    className='group ms-auto inline-flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-brand-600 hover:underline dark:text-neutral-400 dark:hover:text-brand-400'
                >
                    View all blog posts
                    <FaArrowRight className='transition-transform duration-100 group-hover:translate-x-0.5' />
                </Link>
            </div>
        </Section>
    )
}
