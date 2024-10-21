import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import Head from 'next/head'; // Import Head component
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Toaster } from '@/components/ui/sonner';
import ComingSoon from '@/components/shared/coming-soon';
import Footer from '@/components/shared/footer';
import { cn } from '@/lib/utils';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../globals.css';
import HeaderSelector from './HeaderSelector'; // Import HeaderSelector

const isComingSoon = process.env.NEXT_PUBLIC_APP_MODE === 'coming-soon';

export const metadata: Metadata = {
  title: 'Gondli - Easiest Way of Booking Wellness Services',
  description:
    'Your Path to wellness starts here. Finding and reserving top wellness services around you is now simple using Gondli',
};

export const viewport: Viewport = {
  themeColor: '#0C343D',
  maximumScale: 1,
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
    <html lang={locale} className="scroll-smooth">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PLM7GFXG');
            `,
        }}
      />
      <body className={cn('bg-surface-primary leading-snug sm:leading-none')}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PLM7GFXG"
            height="0"
            width="0"
            className="invisible hidden"
          ></iframe>
        </noscript>
        <NextIntlClientProvider messages={messages}>
          {isComingSoon ? (
            <ComingSoon />
          ) : (
            <>
              <HeaderSelector /> {/* Use HeaderSelector component */}
              <div className="min-h-screen">{children}</div>
              <Footer />
            </>
          )}
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
