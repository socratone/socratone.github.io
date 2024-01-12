import { GoogleTagManager } from '@next/third-parties/google';
import { isProduction } from 'helpers/env';
import { Metadata } from 'next';

import Providers from './providers';

export const metadata: Metadata = {
  metadataBase: new URL('https://socratone.github.io'),
  title: '소크라톤',
  description: '프론트엔드 개발자 소크라톤 페이지',
  openGraph: {
    type: 'website',
    title: '소크라톤',
    description: '프론트엔드 개발자 소크라톤 페이지',
    siteName: 'Socratone',
    images: '/images/resume/profile.webp',
  },
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        {/* pretendard font */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard.css"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
        {isProduction ? <GoogleTagManager gtmId="GTM-K9X3KL2C" /> : null}
      </body>
    </html>
  );
}
