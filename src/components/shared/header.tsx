import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';

export default function Header() {
  const t = useTranslations();

  const navigation = [
    {
      href: '#explore',
      label: t('explore'),
    },
    {
      href: '#features',
      label: t('features'),
    },
    {
      href: '#solutions',
      label: t('solutions'),
    },
    {
      href: '#testimonials',
      label: t('testimonials'),
    },
  ];

  return (
    <header className='fixed top-0 z-10 flex h-16.75 w-full items-center justify-between bg-surface-brand px-3.75 sm:h-18.5 sm:px-25'>
      <Image
        src='/images/logo.svg'
        alt='logo'
        priority
        width='101'
        height='22'
        className='h-4.5 sm:h-auto'
      />
      <nav className='hidden lg:block'>
        <ul className='flex gap-10 text-white'>
          {navigation.map(({ href, label }) => (
            <li key={href}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className='flex gap-5'>
        <Button>{t('join-waitlist')}</Button>
        <button type='button' className='lg:hidden'>
          <Image
            src='/images/icons/menu.svg'
            alt='menu'
            height='24'
            width='24'
          />
        </button>
      </div>
    </header>
  );
}
