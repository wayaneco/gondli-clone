import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { cn } from '@/lib/utils';
import '../globals.css';
import ComingSoon from '@/components/shared/coming-soon';

const inter = Inter({ subsets: ['latin'] });

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
      <body className={cn('bg-surface-primary', inter.className)}>
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
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
