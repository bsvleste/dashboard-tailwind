'use client'
import { UploadCloud } from "lucide-react";
import { useFileInput } from "./Root";
import { twMerge } from 'tailwind-merge'
export function Trigger() {
  const { id } = useFileInput()
  return (
    <label htmlFor={id} className={twMerge(
      "group shadow-sm px-6 py-4 text-center  items-center gap-3 rounded-lg flex-1 flex flex-col cursor-pointer",
      " hover:bg-violet-100 hover:border-violet-200 hover:text-violet-500 text-zinc-500 border border-zinc-300 ",
      "dark:hover:bg-zinc-800  dark:border-zinc-700 dark:hover-text-violet-400 dark:text-zinc-300 "
    )} >
      <div className={twMerge(
        "border-6 rounded-full p-2",
        "border-zinc-50 bg-zinc-200 group-hover:border-violet-50 group-hover:bg-violet-100",
        "dark:border-zinc-700 dark:bg-zinc-800 dark:group-hover:border-zinc-600 dark:group-hover:bg-zinc-700 "
      )}>
        <UploadCloud className="w-5 h-5 text-zinc-600 group-hover:text-violet-500" />
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="text-sm">
          <span className="text-violet-700 font-bold">Click to upload</span> or drad and drop</span>
        <span className="text-sm">SVG, PNG, JPG or GIF(max. 800x400px)</span>
      </div>
      <input type="file" className="sr-only" id="photo" />
    </label>
  )
}