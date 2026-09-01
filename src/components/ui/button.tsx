import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'group/button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-[12px] font-medium uppercase tracking-[0.04em] transition duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.97] md:text-[13px]',
  {
    variants: {
      variant: {
        default:
          'bg-white !text-neutral-950 shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:bg-accent hover:!text-white',
        primary:
          'bg-primary !text-primary-foreground shadow-[0_8px_24px_rgba(29,95,143,0.35)] hover:bg-primary-hover hover:!text-primary-foreground',
        dark: 'bg-black text-white hover:bg-neutral-800',
        ghost:
          'border border-white/25 bg-white/10 text-white backdrop-blur hover:bg-white/20',
        outline:
          'border border-neutral-300 bg-white text-neutral-900 hover:border-neutral-900',
      },
      size: {
        sm: 'h-8 px-3.5 md:h-9 md:px-4',
        md: 'h-10 px-4 md:h-11 md:px-5',
        lg: 'h-11 px-5 md:h-12 md:px-6',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
)

type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
