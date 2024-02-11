import {
  BASE_URL,
  HOME_DESCRIPTION,
  HOME_IMAGES,
  HOME_TITLE,
} from 'constants/seo';
import type { Metadata } from 'next';

import HomePage from './home-page';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    openGraph: {
      title: HOME_TITLE,
      description: HOME_DESCRIPTION,
      type: 'website',
      siteName: 'Socratone',
      images: HOME_IMAGES,
    },
    alternates: {
      canonical: BASE_URL,
    },
  };
}

const Page = () => {
  return <HomePage />;
};

export default Page;
