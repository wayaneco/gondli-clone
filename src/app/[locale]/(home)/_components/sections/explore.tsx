import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Badge } from '@/components/ui/badge';
import { SectionWrapper, SectionTitle, SectionDescription } from '.';

export default function ExploreSection() {
  const t = useTranslations();

  const services = [
    'Yoga',
    'Fitness',
    'Massage',
    'Sauna',
    'Spa',
    'Reiki',
    'Chiropractic',
    'Pilates',
    'Meditation',
    'Nutrition',
    'Ayurveda',
    'Acupuncture',
    'Aromatherapy',
    'Counseling',
    'Detox',
    'Mindfulness',
    'Retreats',
    'Coaching',
    'Tai Chi',
  ];

  return (
    <SectionWrapper
      id='explore'
      className='flex justify-center gap-10 sm:items-center sm:justify-between'
    >
      <div className='flex w-full flex-col justify-center gap-10 sm:max-w-162.5 sm:gap-17.25'>
        <div className='space-y-8 text-center sm:space-y-10 sm:text-start'>
          <SectionTitle>{t('explore-title')}</SectionTitle>
          <Image
            src={'/images/explore/mobile.png'}
            alt='explore'
            width={345}
            height={345}
            className='mx-auto rounded-3xl sm:mx-0 lg:hidden'
          />
          <SectionDescription>{t('explore-description')}</SectionDescription>
        </div>
        <div className='flex flex-wrap justify-center gap-2 sm:justify-start sm:gap-2.5'>
          {services.map((service) => (
            <Badge key={service}>{service}</Badge>
          ))}
        </div>
      </div>
      <Image
        src={'/images/explore/index.png'}
        alt='explore'
        width={450}
        height={650}
        className='hidden rounded-3xl lg:block'
      />
    </SectionWrapper>
  );
}
