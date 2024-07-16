import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Badge } from '@/components/ui/badge';

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
    <div
      id='explore'
      className='sm:py-30 flex justify-center gap-10 bg-surface-primary px-3.5 py-15 sm:items-center sm:justify-between sm:px-25'
    >
      <div className='flex w-86.25 flex-col justify-center gap-10 sm:w-162.5 sm:gap-17.25'>
        <div className='space-y-8 text-center sm:space-y-10 sm:text-start'>
          <h2 className='text-2.25xl font-medium sm:text-4.25xl'>
            {t('explore-title')}
          </h2>
          <Image
            src='/images/explore/mobile.png'
            alt='explore'
            width={345}
            height={345}
            className='mx-auto rounded-3xl sm:mx-0 lg:hidden'
          />
          <p className='sm:text-xl'>{t('explore-description')}</p>
        </div>
        <div className='flex flex-wrap justify-center gap-2 sm:justify-start sm:gap-2.5'>
          {services.map((service) => (
            <Badge key={service}>{service}</Badge>
          ))}
        </div>
      </div>
      <Image
        src='/images/explore/index.png'
        alt='explore'
        width={450}
        height={650}
        className='hidden rounded-3xl lg:block'
      />
    </div>
  );
}
