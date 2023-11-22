import { ComponentProps } from "react";
import { twMerge } from 'tailwind-merge'
interface TextAreaProps extends ComponentProps<'textarea'> { }
export function TextArea(props: TextAreaProps) {
  return (
    <textarea
      className={twMerge(
        "outline-none  min-h-[120px] resize-y w-full rounded-lg border  px-3 py-2 shadow-sm ",
        "focus:border-violet-300 focus:ring-4 focus:ring-violet-100 border-zinc-300",
        "dark:border-zinc-700 dark:bg-zinc-800 dark:group-hover:border-zinc-600 dark:group-hover:bg-zinc-700 dark:text-zinc-400",
        "dark:focus:border-violet-500  dark:focus:ring-violet-500/20"


      )}
      {...props}
    />
  )
}