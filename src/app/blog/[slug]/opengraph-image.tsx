import format from 'date-fns/format'
import { notFound } from 'next/navigation'
import { ImageResponse } from 'next/og'
import { MY_DOMAIN } from '@/utils/config'
import { getPostBySlug } from '@/utils/mdx'

export const size = {
    width: 1200,
    height: 600,
} as const

export default async function Image({ params }: { params: { slug: string } }) {
    const post = getPostBySlug(undefined, params.slug)

    if (!post) {
        return notFound()
    }

    const [jetBrainsMonoExtrabold, spaceGroteskMedium] = await Promise.all([
        fetch(new URL('/fonts/JetBrainsMono-ExtraBold.ttf', MY_DOMAIN), {
            cache: 'force-cache',
        }).then(res => res.arrayBuffer()),
        fetch(new URL('/fonts/SpaceGrotesk-Medium.ttf', MY_DOMAIN), {
            cache: 'force-cache',
        }).then(res => res.arrayBuffer()),
    ])

    let bgUrl: string
    if (typeof post.thumbnailUrl === 'undefined') {
        bgUrl = `${MY_DOMAIN}/images/og-template.png`
    } else if (post.thumbnailUrl.startsWith('/')) {
        bgUrl = `${MY_DOMAIN}${post.thumbnailUrl}`
    } else {
        bgUrl = post.thumbnailUrl
    }

    return new ImageResponse(
        (
            <div
                tw='bg-neutral-900 relative flex justify-center items-center text-neutral-100 w-full h-full p-12'
                style={{
                    fontFamily: '"JetBrains Mono", sans-serif',
                    backgroundImage: `${
                        typeof post.thumbnailUrl === 'undefined'
                            ? 'linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,0.5)), '
                            : 'linear-gradient(to bottom,rgba(0,0,0,0.05),rgba(0,0,0,0.97)), '
                    }url("${bgUrl}")`,
                }}
            >
                <div tw='flex flex-col items-start justify-start w-full h-full'>
                    <span tw='text-4xl opacity-80 mb-auto'>{'<Z/>'}</span>
                    <h1
                        tw='text-[5rem] leading-none font-extrabold tracking-tighter max-w-[46rem] mb-8'
                        style={{
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-ignore
                            textWrap: 'balance',
                        }}
                    >
                        {truncate(post.title)}
                    </h1>

                    <div
                        tw='text-neutral-400 text-3xl font-medium flex items-center'
                        style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                    >
                        <div tw='flex items-center justify-center'>
                            <svg
                                width='1em'
                                height='1em'
                                viewBox='0 0 24 24'
                                fill='none'
                            >
                                <path
                                    d='M8 2V6M16 2V6'
                                    stroke='currentColor'
                                    stroke-width='2'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                />
                                <path
                                    d='M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z'
                                    stroke='currentColor'
                                    stroke-width='2'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                />
                                <path
                                    d='M3 10H21'
                                    stroke='currentColor'
                                    stroke-width='2'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                />
                            </svg>
                            <span tw='ml-3'>
                                {format(post.date, 'LLLL do, yyyy')}
                            </span>
                        </div>
                        <span tw='ml-6 text-sm'>•</span>
                        <div tw='ml-6 flex items-center justify-center'>
                            <svg
                                width='1em'
                                height='1em'
                                viewBox='0 0 24 24'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
                                    stroke='currentColor'
                                    stroke-width='2'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                />
                                <path
                                    d='M2 12H22M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z'
                                    stroke='currentColor'
                                    stroke-width='2'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                />
                            </svg>

                            <span tw='ml-3'>zabd.dev/blog</span>
                        </div>
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
            fonts: [
                {
                    name: 'JetBrains Mono',
                    data: jetBrainsMonoExtrabold,
                    style: 'normal',
                    weight: 800,
                },
                {
                    name: 'Space Grotesk',
                    data: spaceGroteskMedium,
                    style: 'normal',
                    weight: 500,
                },
            ],
        },
    )
}

function truncate(phrase: string, maxLength = 46) {
    const trimmedPhrase = phrase.trim()
    if (trimmedPhrase.length <= maxLength) {
        return trimmedPhrase
    }
    return trimmedPhrase.slice(0, maxLength).trim() + '...'
}
