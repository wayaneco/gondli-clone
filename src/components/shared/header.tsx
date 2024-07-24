import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Menu } from '@/icons';
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
    <header className='fixed top-0 z-20 flex h-16.75 w-full items-center justify-between bg-surface-brand px-3.75 sm:h-18.5 lg:px-25'>
      <Image
        src={'/images/logo/index.svg'}
        alt='logo'
        priority
        width={101}
        height={22}
        className='h-4.5 sm:h-auto'
      />
      <nav className='hidden lg:block'>
        <ul className='flex gap-10 text-white'>
          {navigation.map(({ href, label }) => (
            <li key={href}>
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className='flex gap-5'>
        <Link href='#waitlist'>
          <Button>{t('join-waitlist')}</Button>
        </Link>
        <button type='button' className='text-white lg:hidden'>
          <Menu />
        </button>
      </div>
    </header>
  );
}
