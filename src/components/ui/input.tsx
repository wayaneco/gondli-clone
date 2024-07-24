import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { Button } from './button';

const inputVariants = cva(
  'flex h-12.25 w-full rounded-full px-7 text-sm ring-offset-blue-600 file:border-0 file:bg-transparent file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:h-16 sm:text-base',
  {
    variants: {
      variant: {
        default:
          'bg-input text-white backdrop-blur-2.5xl placeholder:text-white',
        solid: 'bg-input-solid text-black placeholder:text-text-secondary',
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
  submitButton?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, submitButton, ...props }, ref) => {
    return (
      <div className='relative'>
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
          >
            {submitButton}
          </Button>
        )}
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input };
