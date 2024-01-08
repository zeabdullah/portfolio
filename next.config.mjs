import createMDX from '@next/mdx'

const withMDX = createMDX({
    extension: /\.mdx?$/, // allow both .md and .mdx
})

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
}

export default withMDX(nextConfig)
