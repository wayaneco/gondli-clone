import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { SectionWrapper, SectionTitle, SectionDescription } from '.';

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

  const features = ['search', 'stories', 'gamification', 'content'];

  return (
    <SectionWrapper
      id='features'
      className='relative mx-auto flex w-full flex-col items-center gap-10 overflow-hidden bg-surface-brand text-center text-white sm:gap-20'
    >
      <MountainsShape className='-left-12 top-0 rotate-180 sm:-left-32 sm:-top-12' />
      <SectionTitle>{t('features-title')}</SectionTitle>
      <div className='grid w-full overflow-hidden rounded-3xl bg-feature backdrop-blur-2.5xl sm:grid-cols-2'>
        {features.map((feature, index) => (
          <div className='relative border border-border-feature' key={index}>
            <div className='relative w-full overflow-hidden px-3.75 text-center sm:px-8'>
              <div className='flex min-h-39.25 flex-col justify-center gap-3 py-5'>
                <h3 className='text-lg font-medium sm:text-xl'>
                  {t(`features-${feature}-title`)}
                </h3>
                <p className='mx-auto max-w-150 text-sm sm:text-base'>
                  {t(`features-${feature}-description`)}
                </p>
              </div>
              <Image
                src={`/images/features/${feature}.png`}
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
        <SectionDescription className='max-w-212.5'>
          {t('features-description')}
        </SectionDescription>
        <Link href='#waitlist'>
          <Button size='lg'>{t('join-waitlist')}</Button>
        </Link>
      </div>
      <MountainsShape className='-right-12 bottom-0 sm:-bottom-12 sm:-right-32' />
    </SectionWrapper>
  );
}
