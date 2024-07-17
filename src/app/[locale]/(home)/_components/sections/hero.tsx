import { useTranslations } from 'next-intl';
import HeroBackground from './hero-background';
import JoinWaitlist from '../join-waitlist';
import { SectionWrapper, SectionTitle, SectionDescription } from '.';

export default function HeroSection() {
  const t = useTranslations();

  return (
    <div className='relative h-screen w-full pt-16.75'>
      <SectionWrapper className='flex h-full w-full flex-col items-center justify-center gap-15 text-center sm:gap-20'>
        <div className='flex flex-col items-center gap-8 p-3.75 text-white sm:gap-6'>
          <SectionTitle>{t('hero-title')}</SectionTitle>
          <SectionDescription className='max-w-150'>
            {t('hero-description')}
          </SectionDescription>
        </div>
        <JoinWaitlist />
      </SectionWrapper>
      <HeroBackground />
    </div>
  );
}
