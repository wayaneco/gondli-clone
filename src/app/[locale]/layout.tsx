import type { Metadata } from 'next';
import localFont from '@next/font/local';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Toaster } from '@/components/ui/sonner';
import ComingSoon from '@/components/shared/coming-soon';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { cn } from '@/lib/utils';
import '../globals.css';

export const futura = localFont({
  src: [
    {
      path: '../../../public/fonts/futura-light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/futura-regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/futura-medium.ttf',
      weight: '500',
      style: 'normal',
    },
  ],
});

const isComingSoon = process.env.NEXT_PUBLIC_APP_MODE === 'coming-soon';

export const metadata: Metadata = {
  title: 'Gondli - Easiest Way of Booking Wellness Services',
  description:
    'Your Path to wellness starts here. Finding and reserving top wellness services around you is now simple using Gondli',
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale} className='scroll-smooth'>
      <body className={cn('bg-surface-primary leading-none', futura.className)}>
        <NextIntlClientProvider messages={messages}>
          {isComingSoon ? (
            <ComingSoon />
          ) : (
            <>
              <Header />
              {children}
              <Footer />
            </>
          )}
          <Toaster
            toastOptions={{
              className: 'bg-surface-brand border-situational-primary',
            }}
          />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
