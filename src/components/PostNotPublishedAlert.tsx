import { FiInfo } from 'react-icons/fi'

export default function PostNotPublishedAlert() {
    return (
        <div className='flex items-center gap-2 rounded-md border border-brand-200 bg-brand-100 p-3 py-4 text-sm text-brand-900 transition-[background-color] dark:border-brand-900 dark:bg-brand-950 dark:text-brand-200'>
            <FiInfo className='inline-block shrink-0 text-xl' />
            <p>
                This post is <strong>not published</strong>, you can currently
                see it in <strong>dev mode</strong> only.
            </p>
        </div>
    )
}
