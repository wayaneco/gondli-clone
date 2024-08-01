import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { Button, ButtonProps } from './button';

const inputVariants = cva(
  'flex h-12.25 w-full rounded-full px-7 text-sm outline-none file:border-0 file:bg-transparent file:font-medium disabled:cursor-not-allowed disabled:opacity-50 sm:h-16 sm:text-base',
  {
    variants: {
      variant: {
        default:
          'bg-input text-white backdrop-blur-2.5xl placeholder:text-white',
        solid: 'bg-input-solid text-black placeholder:text-text-secondary',
        form: 'rounded-xl px-4.5 caret-pistachio-green placeholder:text-text-secondary sm:h-12.25 sm:text-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  submitButton?: ButtonProps;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, submitButton, ...props }, ref) => {
    return (
      <div
        className={cn(
          'relative',
          variant === 'form' &&
            'rounded-xl border border-transparent bg-surface-primary bg-clip-padding after:absolute after:-inset-px after:-z-10 after:rounded-xl after:bg-border-primary focus-within:shadow-input-form focus-within:after:bg-button-default',
        )}
      >
        <input
          type={type}
          className={cn(inputVariants({ variant, className }))}
          ref={ref}
          {...props}
        />
        {submitButton && (
          <Button
            type='submit'
            className='absolute right-1 top-1 sm:right-1.5 sm:top-1.5'
            {...submitButton}
          />
        )}
        {(!variant || variant === 'default') && (
          <div className='glass-border before:rounded-full' />
        )}
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input };
