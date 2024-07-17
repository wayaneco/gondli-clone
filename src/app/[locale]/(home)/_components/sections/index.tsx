import { ReactNode, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface SectionProps<T> extends HTMLAttributes<T> {
  children: ReactNode;
}

export function SectionWrapper({
  children,
  ...props
}: SectionProps<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn('px-3.5 py-15 sm:py-30 lg:px-25', props?.className)}
    >
      {children}
    </div>
  );
}

export function SectionTitle({
  children,
  ...props
}: SectionProps<HTMLHeadElement>) {
  return (
    <h2
      {...props}
      className={cn('text-2.25xl font-medium sm:text-4.25xl', props?.className)}
    >
      {children}
    </h2>
  );
}

export function SectionDescription({
  children,
  ...props
}: SectionProps<HTMLParagraphElement>) {
  return (
    <p {...props} className={cn('sm:text-xl', props?.className)}>
      {children}
    </p>
  );
}
