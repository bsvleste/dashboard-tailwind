import { Button } from "@/components/Button";
import { formatBytes } from "@/utils/formatBytes";
import { Check, CheckCircle2, Trash2, UploadCloud } from "lucide-react";
import { tv, VariantProps } from 'tailwind-variants'
const fileItem = tv({
  slots: {
    container: 'p-4 group flex items-start gap-4 rounded-lg border border-zinc-200',
    icon: 'rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600  dark:border-zinc-700 dark:bg-zinc-800',
    deleteButton: ""
  },
  variants: {
    state: {
      progress: { container: "" },
      complete: { container: "border-violet-500" },
      error: {
        container: "bg-red-50 border-red-300 dark:bg-red-500/5 dark:border-red-500/30 ",
        icon: "border-red-100 bg-red-200 text-red-600 dark:border-red-600/30 dark:bg-red-200/10 dark:text-red-600/30",
        deleteButton: "text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 dark:hover:bg-red-600/30"
      }
    }
  },
  defaultVariants: {
    state: "progress"
  }
})

interface FileItemProps extends VariantProps<typeof fileItem> {
  name: string
  size: number
}

export function FileItem({ name, size, state }: FileItemProps) {
  const { container, icon, deleteButton } = fileItem({ state })
  return (
    <div
      className={container()}>
      <div className={icon()}>
        <UploadCloud className="h-4 w-4 " />
      </div>

      {
        state === 'error' ? (
          <div className="flex flex-1 flex-col items-start gap-1">
            <div className="flex flex-col">
              <span className="text-sm font-medium text-red-700">Upload Faild. Plase try again</span>
              <span className="text-sm text-red-600">{name}</span>
            </div>
            <button type="button" className="text-sm font-semibold text-red-700 hover:text-red-900 ">Try again</button>
          </div>
        ) : (
          <div className="flex flex-1 flex-col items-start gap-1">
            <div className="flex flex-col">
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{name}</span>
              <span className="text-sm text-zinc-500">{formatBytes(size)}</span>
            </div>
            <div className="flex w-full items-center gap-3">
              <div className="h-2 flex-1 rounded-full bg-zinc-200">
                <div
                  className="h-2 rounded-full bg-violet-600"
                  style={{ width: state === 'complete' ? "100%" : "80%" }} />
              </div>
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{state === 'complete' ? "100%" : "80%"}</span>
            </div>
          </div>
        )
      }

      {
        state === 'complete' ? (
          <CheckCircle2 className="h-5 w-5 fill-violet-600 text-white" />
        ) : (
          <Button type="button" variant="ghost" className={deleteButton()}>
            <Trash2 className='w-5 h-5' />
          </Button>
        )
      }

    </div>
  )
}