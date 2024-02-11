import { GoogleTagManager } from '@next/third-parties/google';
import GoogleAnalytics from 'components/GoogleAnalytics';
import { HOME_DESCRIPTION, HOME_IMAGES, HOME_TITLE } from 'constants/seo';
import { isProduction } from 'helpers/env';
import type { Metadata } from 'next';

import Providers from './providers';

/** Default metadata */
export const metadata: Metadata = {
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  openGraph: {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    type: 'website',
    siteName: 'Socratone',
    images: HOME_IMAGES,
  },
};

export default function RootLayout({
  /*
   * Layouts must accept a children prop.
   * This will be populated with nested layouts or pages
   */
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        {isProduction ? <GoogleAnalytics /> : null}

        {/* pretendard font */}
        {/* https://github.com/orioncactus/pretendard */}
        <link
          rel="stylesheet"
          as="style"
          crossOrigin=""
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
        {/* https://nextjs.org/docs/app/building-your-application/optimizing/third-party-libraries#google-tag-manager */}
        {isProduction ? <GoogleTagManager gtmId="GTM-K9X3KL2C" /> : null}
      </body>
    </html>
  );
}
