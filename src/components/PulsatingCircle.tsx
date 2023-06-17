export default function PulsatingCircle() {
    return (
        <span className='absolute end-0 top-0 aspect-square h-2 rounded-full bg-violet-600 dark:bg-yellow-500'>
            <span className='absolute h-full w-full animate-ping rounded-full bg-inherit' />
        </span>
    )
}
