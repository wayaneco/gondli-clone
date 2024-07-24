import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Globe } from '@/icons';

export default function Footer() {
  const t = useTranslations();

  const navigation = [
    {
      title: t('discover'),
      links: [
        {
          label: 'About Us',
          href: '#',
        },
        {
          label: 'Services',
          href: '#',
        },
        {
          label: 'Subscriptions',
          href: '#',
        },
        {
          label: 'Our Blog',
          href: '#',
        },
      ],
    },
    {
      title: t('help'),
      links: [
        {
          label: 'FAQ',
          href: '#',
        },
        {
          label: 'Customer Service',
          href: '#',
        },
        {
          label: 'Terms & Conditions',
          href: '#',
        },
        {
          label: 'Privacy Policy',
          href: '#',
        },
      ],
    },
    {
      title: t('Find us on'),
      links: [
        {
          label: 'Facebook',
          href: '#',
        },
        {
          label: 'Instagram',
          href: '#',
        },
        {
          label: 'Twitter',
          href: '#',
        },
        {
          label: 'Linkedin',
          href: '#',
        },
      ],
    },
    {
      title: t('business'),
      links: [
        {
          label: 'Register Your Business',
          href: '#',
        },
        {
          label: 'Advertise on Gondli',
          href: '#',
        },
      ],
    },
  ];

  return (
    <footer className='flex w-full flex-col bg-surface-brand px-3.75 py-8 text-sm text-white sm:text-base lg:px-25'>
      <Image
        src={'/images/logo.svg'}
        alt='logo'
        priority
        width={82}
        height={18}
        className='sm:hidden'
      />
      <nav className='grid grid-cols-2 gap-y-11 pt-10 sm:grid-cols-4 sm:gap-x-5 sm:pt-0'>
        {navigation.map(({ title, links }) => (
          <ul key={title} className='space-y-3'>
            <h4 className='text-situational-secondary'>{title}</h4>
            {links.map(({ label, href }) => (
              <li key={label}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        ))}
      </nav>
      <div className='mt-10 h-px w-full bg-situational-primary sm:mt-8' />
      <div className='flex w-full items-center justify-between pt-5 sm:pt-8'>
        <div className='flex items-center gap-1.5'>
          <Globe />
          <p>{t('switzerland')}</p>
        </div>
        <Image
          src={'/images/logo.svg'}
          alt='logo'
          priority
          width={102}
          height={24}
          className='hidden sm:block'
        />
        <p>© 2023. {t('all-rights-reserved')}</p>
      </div>
    </footer>
  );
}
