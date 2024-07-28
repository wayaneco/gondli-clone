import Image from 'next/image';
import { glob } from 'glob';
import { cn } from '@/lib/utils';

const COLUMNS = {
  length: 5,
  repeat: 3,
};

export default async function HeroBackground() {
  const images = await glob('public/images/hero/*.{png,jpg,jpeg}');
  const columns: string[][] = Array.from({ length: COLUMNS.length }, () => []);

  images.forEach((filename, index) => {
    columns[index % COLUMNS.length].push(filename.replace('public', ''));
  });

  return (
    <div className='absolute left-0 top-0 -z-10 flex h-full w-full justify-center gap-6 overflow-hidden bg-surface-brand p-inherit'>
      <div className='absolute left-0 top-0 z-10 h-full w-full space-y-6 bg-hero-gradient' />
      {columns.map((paths, index) => (
        <div
          className='h-full min-w-39.25 flex-1 shrink-0 overflow-hidden sm:min-w-57.5'
          key={index}
        >
          {[...new Array(COLUMNS.repeat)].map((_, i) => (
            <div
              className={cn(
                'flex flex-col',
                index % 2 === 0 ? 'animate-down' : 'animate-up',
              )}
              aria-hidden={!!i || undefined}
              key={i}
            >
              {paths.map((path) => (
                <Image
                  src={path}
                  alt='hero'
                  width={460}
                  height={660}
                  priority
                  className='h-auto w-full rounded-2xl pb-6'
                  key={path}
                />
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
