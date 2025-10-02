export const GITHUB_PROFILE_URL = 'https://github.com/zeabdullah'
export const LINKEDIN_PROFILE_URL = 'https://linkedin.com/in/zeabdullah'
export const MY_EMAIL = 'me@zabd.dev'
export const MAIL_TO_ME = `mailto:${MY_EMAIL}`

if (!process.env.NEXT_PUBLIC_URL) {
    throw new Error(
        '`NEXT_PUBLIC_URL` is not defined in your environment variables.',
    )
}
export const MY_DOMAIN = process.env.NEXT_PUBLIC_URL
