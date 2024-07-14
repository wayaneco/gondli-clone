import Image from 'next/image';
import { glob } from 'glob';
import { cn } from '@/lib/utils';

const HERO_COLUMNS = 5;

export default async function HeroBackground() {
  const heroDirectory = await glob('public/images/hero/*.{png,jpg,jpeg}');
  const heroColumns: string[][] = Array.from(
    { length: HERO_COLUMNS },
    () => [],
  );

  heroDirectory.forEach((filename, index) => {
    heroColumns[index % HERO_COLUMNS].push(filename.replace('public', ''));
  });

  return (
    <div className='p-inherit absolute left-0 top-0 -z-10 flex h-full w-full justify-center gap-6 overflow-hidden bg-surface-brand'>
      <div className='absolute left-0 top-0 z-10 h-full w-full space-y-6 bg-hero' />
      {heroColumns.map((paths, index) => (
        <div
          className='h-full min-w-57.5 flex-1 shrink-0 overflow-hidden'
          key={index}
        >
          {[...new Array(2)].map((_, i) => (
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
                  width={230}
                  height={330}
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
