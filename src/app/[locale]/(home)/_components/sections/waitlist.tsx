import { useTranslations } from 'next-intl';
import { SectionWrapper, SectionTitle, SectionDescription } from '.';
import JoinWaitlist from '../join-waitlist';
import Image from 'next/image';

export default function WaitlistSection() {
  const t = useTranslations();

  return (
    <SectionWrapper id='waitlist' className='space-y-20 !pb-0'>
      <div className='flex flex-col items-center gap-10'>
        <div className='space-y-8 text-center sm:space-y-6'>
          <SectionTitle>{t('waitlist-title')}</SectionTitle>
          <SectionDescription>{t('waitlist-description')}</SectionDescription>
        </div>
        <JoinWaitlist inputVariant={'solid'} />
      </div>
      <div className='relative'>
        <Image
          src={'/images/waitlist.png'}
          alt='waitlist'
          width={1440}
          height={1070}
          className='max-h-172 2xl:max-h-258 w-full object-cover object-top'
        />
        <div className='h-35.5 absolute bottom-0 left-0 w-full bg-gradient-to-t from-white' />
      </div>
    </SectionWrapper>
  );
}
