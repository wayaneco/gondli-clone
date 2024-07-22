import { ReactNode, HTMLAttributes } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export interface SectionProps<T> extends HTMLAttributes<T> {
  children?: ReactNode;
  displayMountains?: boolean;
}

function SectionMountains({
  show,
  className,
}: {
  show?: boolean;
  className?: string;
}) {
  if (!show) return;

  return (
    <Image
      src='/images/shapes/mountains.png'
      alt='mountains'
      width={647.54}
      height={256.99}
      className={cn(
        'pointer-events-none absolute max-w-56 sm:max-w-none',
        className,
      )}
    />
  );
}

export function SectionWrapper({
  children,
  className,
  displayMountains,
  ...props
}: SectionProps<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn(
        'relative overflow-hidden px-3.5 py-15 sm:py-30 lg:px-25',
        className,
      )}
    >
      <SectionMountains
        show={displayMountains}
        className='-left-12 top-0 rotate-180 sm:-left-32 sm:-top-12'
      />
      {children}
      <SectionMountains
        show={displayMountains}
        className='-right-12 bottom-0 sm:-bottom-12 sm:-right-32'
      />
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
