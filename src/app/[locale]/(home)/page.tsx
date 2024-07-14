import { useTranslations } from 'next-intl';
import HeroBackground from './_components/hero-background';
import JoinWaitlist from './_components/join-waitlist';

export default function Home() {
  const t = useTranslations();

  return (
    <main>
      <div className='relative h-screen w-full pt-16.75'>
        <div className='flex h-full w-full flex-col items-center justify-center gap-15 text-center sm:gap-20'>
          <div className='flex flex-col items-center gap-8 p-3.75 text-white sm:gap-6'>
            <h1 className='text-2.25xl font-medium leading-tight sm:text-4.25xl'>
              {t('hero-title')}
            </h1>
            <h2 className='max-w-150 sm:text-xl'>{t('hero-description')}</h2>
          </div>
          <JoinWaitlist />
        </div>
        <HeroBackground />
      </div>
    </main>
  );
}
