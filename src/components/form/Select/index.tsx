'use client';
import { ReactNode } from 'react'
import * as SelectPrimitive from '@radix-ui/react-select';
import { Check, ChevronDownIcon } from 'lucide-react'
import { twMerge } from 'tailwind-merge'
export interface SelectProps extends SelectPrimitive.SelectProps {
  children: ReactNode
  placeholder: string
}
export function Select({ children, placeholder, ...props }: SelectProps) {
  return (
    <SelectPrimitive.Root {...props}>
      <SelectPrimitive.Trigger
        className={twMerge(
          "outline-none  flex h-11 w-full items-center justify-between gap-2 rounded-lg border  px-3 shadow-sm",
          "focus:border-violet-300 focus:ring-4 focus:ring-violet-100 border-zinc-300 data-[placeholder]:text-zinc-500 ",
          "dark:border-zinc-700 dark:bg-zinc-800 dark:group-hover:border-zinc-600 dark:group-hover:bg-zinc-700 dark:text-zinc-400",
          "dark:focus:border-violet-500  dark:focus:ring-violet-500/20 dark:data-[placeholder]:text-zinc-400"

        )}>
        <SelectPrimitive.Value className="text-black dark:text-zinc-200" placeholder={placeholder} />
        <SelectPrimitive.Icon className="h-5 w-5 text-zinc-500">
          <ChevronDownIcon />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          sideOffset={8}
          side='bottom'
          position='popper'
          className='animate-slideDownAndFade shadow-sm z-10 rounded-lg border dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 border-zinc-200 bg-white w-[--radix-select-trigger-width] '>
          <SelectPrimitive.Viewport className='outline-none'>
            {children}
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
}