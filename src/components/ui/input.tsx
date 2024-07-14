import * as React from 'react';

import { cn } from '@/lib/utils';
import { Button } from './button';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  submitButton?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, submitButton, ...props }, ref) => {
    return (
      <div className='relative'>
        <input
          type={type}
          className={cn(
            'flex h-12.25 w-full rounded-full bg-input px-7 text-white bg-blend-luminosity ring-offset-blue-600 backdrop-blur-2.5xl file:border-0 file:bg-transparent file:font-medium placeholder:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:h-16',
            className,
          )}
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
