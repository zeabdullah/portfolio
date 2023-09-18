export const githubProfileUrl = 'https://github.com/zeabdullah'

if (!process.env.NEXT_PUBLIC_URL) {
    throw new Error(
        '`NEXT_PUBLIC_URL` is not defined in your environment variables.',
    )
}
export const MY_DOMAIN = process.env.NEXT_PUBLIC_URL
