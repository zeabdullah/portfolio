import NextImage, { type ImageProps as NextImageProps } from 'next/image'
import { cn } from '@/utils/css'

export default function ResponsiveImage({
    className,
    ...props
}: React.HTMLAttributes<HTMLImageElement>) {
    return (
        <NextImage
            sizes='100vw'
            className={cn(
                'h-auto w-full rounded outline outline-1 outline-neutral-600/30',
                className,
            )}
            {...(props as NextImageProps)}
        />
    )
}
