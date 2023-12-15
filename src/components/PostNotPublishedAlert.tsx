import Alert from './Alert'

export default function PostNotPublishedAlert() {
    return (
        <Alert variant='amber'>
            This post is <strong>not published</strong>, you can currently see
            it in <strong>dev mode</strong> only.
        </Alert>
    )
}
