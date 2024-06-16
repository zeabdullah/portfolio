'use client'

import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import * as React from 'react'
import { cn } from '@/utils/css'

const TooltipProvider = TooltipPrimitive.Provider

function Tooltip({
    delayDuration = 400,
    ...props
}: TooltipPrimitive.TooltipProps) {
    return <TooltipPrimitive.Root delayDuration={delayDuration} {...props} />
}

Tooltip.Trigger = React.forwardRef<
    React.ElementRef<typeof TooltipPrimitive.Trigger>,
    TooltipPrimitive.TooltipTriggerProps
>(({ className, ...props }, ref) => (
    <TooltipPrimitive.Trigger ref={ref} className={cn(className)} {...props} />
))
Tooltip.Trigger.displayName = TooltipPrimitive.Trigger.displayName

Tooltip.Content = React.forwardRef<
    React.ElementRef<typeof TooltipPrimitive.Content>,
    TooltipPrimitive.TooltipContentProps
>(({ className, sideOffset = 4, ...props }, ref) => (
    <>
        <TooltipPrimitive.Content
            ref={ref}
            sideOffset={sideOffset}
            className={cn(
                'z-50 select-none overflow-hidden rounded-md border border-neutral-300/80 bg-neutral-100 px-3 py-2 text-sm leading-none shadow-md will-change-[transform,opacity] dark:border-neutral-700/80 dark:bg-neutral-800',
                'data-[side=bottom]:animate-slideDownAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideUpAndFade data-[state=closed]:animate-fadeOutAndZoomOut',
                className,
            )}
            {...props}
        >
            {props.children}
            {/* <TooltipPrimitive.Arrow /> */}
        </TooltipPrimitive.Content>
    </>
))
Tooltip.Content.displayName = TooltipPrimitive.Content.displayName

export { Tooltip as default, TooltipProvider }
