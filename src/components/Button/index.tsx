import { ComponentProps } from "react"
import { tv, VariantProps } from 'tailwind-variants'
const button = tv({
  base: [
    'outline-none rounded-lg px-4 py-2 text-sm font-semibold shadow-sm',
    'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-200',
    'active:opacity-80'
  ],
  variants: {
    variant: {
      primary: 'bg-violet-600 text-white hover:bg-violet-700',
      outline: 'border border-zinc-300 hover:bg-zinc-300 dark:hover:bg-zinc-600 dark:bg-zinc-700  dark:text-zinc-100 dark:border-none',
      ghost: 'rounded-md hover:bg-violet-100 dark:hover:bg-zinc-800 shadow-none text-zinc-500'
    },
  },
  defaultVariants: {
    variant: 'primary'
  }

})
type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>
export function Button({ variant, className, ...props }: ButtonProps) {
  return (
    <button
      className={button({ variant, className })}
      {...props}
    >
    </button>
  )
}