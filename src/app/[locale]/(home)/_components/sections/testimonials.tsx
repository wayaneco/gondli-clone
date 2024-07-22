import Image from 'next/image';
import { useTranslations } from 'next-intl';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselNav,
} from '@/components/ui/carousel';
import { SectionWrapper, SectionTitle, SectionDescription } from '.';

export default function TestimonialsSection() {
  const t = useTranslations();

  const testimonials = Array.from({ length: 4 }, (_, index) => ({
    id: index,
    testimonial:
      'Discovering Gondli was a game-changer for me! The platform seamlessly connected me with top-notch wellness practitioners, making it effortless to prioritize self-care. From soothing spa experiences to invigorating fitness sessions, Gondli has transformed the way I approach my well-being.',
    author: {
      name: 'Andre Lawson',
      image: '/images/testimonials/andre-lawson.png',
    },
  }));

  return (
    <SectionWrapper
      displayMountains
      id='testimonials'
      className='flex flex-col gap-25 bg-surface-brand text-center text-white sm:gap-27.25'
    >
      <SectionTitle>{t('testimonials-title')}</SectionTitle>
      <Carousel className='pb-13.75 sm:px-20 sm:pb-10'>
        <CarouselContent className='cursor-grab select-none'>
          {testimonials.map(({ id, testimonial, author }) => (
            <CarouselItem key={id}>
              <div className='mx-auto flex max-w-184.5 flex-col items-center gap-25 sm:gap-27.25'>
                <SectionDescription>{testimonial}</SectionDescription>
                <div className='flex gap-3.5'>
                  <Image
                    src={author.image}
                    alt={author.name}
                    width={48}
                    height={48}
                    className='max-h-10 max-w-10 rounded-full sm:max-h-none sm:max-w-none'
                  />
                  <div className='flex h-full flex-col justify-between text-left'>
                    <p className='text-sm font-medium sm:text-xl'>
                      {author.name}
                    </p>
                    <p className='text-sm font-light text-gondli-user sm:text-base'>
                      {t('gondli-user')}
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='top-full sm:top-10' />
        <CarouselNext className='top-full sm:top-10' />
        <CarouselNav className='translate-y-1/2' />
      </Carousel>
    </SectionWrapper>
  );
}
