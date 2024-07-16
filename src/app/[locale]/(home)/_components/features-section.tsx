import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

function MountainsShape({ className }: { className: string }) {
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

export default function FeaturesSection() {
  const t = useTranslations();

  const features = [
    {
      title: t('features-search-title'),
      description: t('features-search-description'),
      image: '/images/features/search.png',
    },
    {
      title: t('features-stories-title'),
      description: t('features-stories-description'),
      image: '/images/features/stories.png',
    },
    {
      title: t('features-gamification-title'),
      description: t('features-gamification-description'),
      image: '/images/features/gamification.png',
    },
    {
      title: t('features-content-title'),
      description: t('features-content-description'),
      image: '/images/features/content.png',
    },
  ];

  return (
    <div
      id='features'
      className='relative flex flex-col items-center gap-10 overflow-hidden bg-surface-brand px-3.5 py-15 text-center text-white sm:gap-20 sm:py-30 lg:px-25'
    >
      <MountainsShape className='-left-12 top-0 rotate-180 sm:-left-32 sm:-top-12' />
      <h2 className='max-w-86.25 text-2.25xl font-medium sm:max-w-none sm:text-4.25xl'>
        {t('features-title')}
      </h2>
      <div className='grid w-full max-w-86.25 overflow-hidden rounded-3xl bg-feature backdrop-blur-2.5xl sm:max-w-none sm:grid-cols-2'>
        {features.map(({ title, description, image }, index) => (
          <div className='relative border border-border-feature' key={index}>
            <div className='relative w-full overflow-hidden px-3.75 text-center sm:px-8'>
              <div className='flex min-h-39.25 flex-col justify-center gap-3 py-5'>
                <h3 className='text-lg font-medium sm:text-xl'>{title}</h3>
                <p className='mx-auto max-w-150 text-sm sm:text-base'>
                  {description}
                </p>
              </div>
              <Image
                src={image}
                alt='feature'
                width={477}
                height={393}
                className='mx-auto'
              />
            </div>
            <div className='absolute bottom-0 h-22.25 w-full bg-feature-gradient' />
          </div>
        ))}
      </div>
      <div className='flex flex-col gap-15 sm:gap-10'>
        <p className='max-w-86.25 sm:max-w-212.5 sm:text-xl'>
          {t('features-description')}
        </p>
        <Link href='#waitlist'>
          <Button size='lg'>{t('join-waitlist')}</Button>
        </Link>
      </div>
      <MountainsShape className='-right-12 bottom-0 sm:-bottom-12 sm:-right-32' />
    </div>
  );
}
