export const GITHUB_PROFILE_URL = 'https://github.com/zeabdullah'
export const LINKEDIN_PROFILE_URL = 'https://linkedin.com/in/zeabdullah'
export const MY_EMAIL = 'contact@zabd.dev'
export const MAIL_TO_ME = `mailto:${MY_EMAIL}`
export const RESUME_REMOTE_URL =
    'https://drive.google.com/file/d/1F46afVwdRy_cAWP1FPXgCc2enqv-0rQp/view?usp=sharing'
export const RESUME_PATH = '/doc/resume.pdf'
export const READCV_URL = 'https://read.cv/zabd'

if (!process.env.NEXT_PUBLIC_URL) {
    throw new Error(
        '`NEXT_PUBLIC_URL` is not defined in your environment variables.',
    )
}
export const MY_DOMAIN = process.env.NEXT_PUBLIC_URL
