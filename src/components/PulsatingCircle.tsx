export default function PulsatingCircle() {
    return (
        <span className='absolute -start-0.5 -top-0.5 aspect-square h-2.5 rounded-full bg-yellow-600 dark:bg-yellow-500 md:-end-0.5 md:start-auto'>
            <span className='absolute h-full w-full animate-ping rounded-full bg-inherit opacity-80' />
        </span>
    )
}
