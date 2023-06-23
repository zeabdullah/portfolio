export default function PulseEffect() {
    return (
        <span className='absolute -start-0.5 -top-0.5 aspect-square h-2.5 rounded-full bg-teal-600 dark:bg-teal-500 sm:-end-0.5 sm:start-auto'>
            <span className='absolute h-full w-full animate-ping rounded-full bg-inherit opacity-80' />
        </span>
    )
}
