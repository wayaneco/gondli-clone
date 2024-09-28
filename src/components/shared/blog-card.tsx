'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLocale } from 'next-intl';

export interface BlogCardProps {
  thumbnail: string;
  category: string;
  title: string;
  index?: number;
}

export function BlogCard({ index, thumbnail, category, title }: BlogCardProps) {
  const locale = useLocale();

  return (
    <Link
      href={`/${locale}/blog/${index}`}
      className='flex h-65.75 w-full flex-col overflow-hidden rounded-2xl border border-border-primary bg-white'
    >
      <Image
        src={thumbnail}
        alt='thumbnail'
        width={0}
        height={0}
        sizes='300px'
        className='h-41 w-full shrink-0 object-cover object-center'
      />
      <div className='flex h-full w-full flex-col justify-center gap-2.5 p-4'>
        <p className='text-sm text-text-secondary'>{category}</p>
        <p className='line-clamp-2 font-medium text-text-primary'>{title}</p>
      </div>
    </Link>
  );
}
