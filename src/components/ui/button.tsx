import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-full ring-offset-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default:
          'bg-button-default text-white disabled:bg-button-disabled disabled:bg-none disabled:text-text-disabled',
        outline:
          'relative border-1.5 border-transparent bg-surface-primary bg-clip-padding after:absolute after:-inset-px.5 after:-z-10 after:rounded-full after:bg-button-default',
      },
      size: {
        default: 'px-3.5 py-2.5 text-sm sm:h-13 sm:px-6 sm:py-2 sm:text-base',
        lg: 'px-5 py-3.5 text-sm sm:h-13 sm:px-6 sm:py-2 sm:text-base',
        sm: 'px-5 py-3.5 text-sm sm:py-3 sm:text-base',
        icon: 'p-1.75',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
