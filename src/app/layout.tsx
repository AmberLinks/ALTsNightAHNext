import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'ALTs夜間動物病院 | 焼津市の犬・猫夜間診療　エキゾチックアニマル専門診療',
  description: '静岡県焼津市のALTs夜間動物病院です。犬・猫の夜間診療、エキゾチックアニマルの専門診療を火・水・木曜日に対応します。静岡市・藤枝市・島田市からもアクセス良好です',
  keywords: ['夜間動物病院', '焼津市', '静岡県', '救急', 'エキゾチックアニマル', 'ウサギ', 'フェレット'],
  authors: [{ name: 'ALTs夜間動物病院' }],
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://alts-night-ah.web.app',
    siteName: 'ALTs夜間動物病院',
    title: 'ALTs夜間動物病院｜焼津市の夜間診療・エキゾチックアニマル専門診療',
    description: '静岡県焼津市のALTs夜間動物病院です。犬・猫の夜間診療、エキゾチックアニマルの専門診療に火・水・木曜日に対応します。',
    images: [
      {
        url: 'https://raw.githubusercontent.com/AmberLinks/ALTsNightAH/main/logoImage.png',
      },
    ],
  },
  twitter: {
    card: 'summary',
  },
  verification: {
    google: 'v3YQF7PId_r26lSOjccHhBmvAd5sKPHrIQFpMzT5kvc',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link rel="canonical" href="https://amberlinks.github.io/ALTsNightAH/" />
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'VeterinaryCare',
              name: 'ALTs夜間動物病院',
              description: '静岡県焼津市のALTs夜間動物病院。犬・猫の夜間診療、エキゾチックアニマルの専門診療に対応。',
              image: 'https://raw.githubusercontent.com/AmberLinks/ALTsNightAH/main/logoImage.png',
              telephone: '+81-54-631-4757',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '石津１丁目19−２',
                addressLocality: '焼津市',
                addressRegion: '静岡県',
                postalCode: '425-0041',
                addressCountry: 'JP',
              },
              url: 'https://amberlinks.github.io/ALTsNightAH/',
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday'],
                  opens: '18:00',
                  closes: '22:00',
                },
              ],
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '34.853032',
                longitude: '138.303978',
              },
            }),
          }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <Header />
        <main className="pt-28">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
