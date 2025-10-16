import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'ALTs夜間動物病院 | 静岡県焼津市',
    template: '%s | ALTs夜間動物病院',
  },
  description: '静岡県焼津市の夜間専門動物病院。犬・猫・エキゾチックアニマルの夜間救急診療。18時～翌朝6時まで診療。',
  keywords: ['夜間動物病院', '焼津市', '静岡県', '救急', '犬', '猫', 'エキゾチックアニマル'],
  authors: [{ name: 'ALTs夜間動物病院' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
