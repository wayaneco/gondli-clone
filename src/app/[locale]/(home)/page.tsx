import { useTranslations } from 'next-intl';
import HeroBackground from './_components/hero-background';

export default function Home() {
  const t = useTranslations();

  return (
    <main>
      <div className='sm:pt-18 relative h-screen w-full pt-16.75'>
        <div className='flex h-full w-full flex-col items-center justify-center gap-20 text-center text-white'>
          <div className='flex flex-col items-center gap-8 p-3.75 sm:gap-6'>
            <h1 className='text-2.25xl font-medium leading-tight sm:text-4.25xl'>
              {t('hero-title')}
            </h1>
            <h2 className='max-w-150 sm:text-xl'>{t('hero-description')}</h2>
          </div>
        </div>
        <HeroBackground />
      </div>
    </main>
  );
}
