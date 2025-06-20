import {
  BASE_URL,
  HOME_IMAGES,
  LIFEHACKS_DESCRIPTION,
  LIFEHACKS_TITLE,
} from 'constants/seo';
import dayjs from 'dayjs';
import { validateLifehackMarkdownMetadata } from 'helpers/markdown';
import type { Metadata } from 'next';
import { cache } from 'react';
import { getFileNames } from 'utils/file';
import { parseMarkdownFile } from 'utils/markdown';

import LifehacksPage from './lifehacks-page';

export const metadata: Metadata = {
  title: LIFEHACKS_TITLE,
  description: LIFEHACKS_DESCRIPTION,
  openGraph: {
    title: LIFEHACKS_TITLE,
    description: LIFEHACKS_DESCRIPTION,
    type: 'website',
    siteName: 'Socratone',
    images: HOME_IMAGES,
  },
  alternates: {
    canonical: `${BASE_URL}/lifehacks`,
  },
};

const getLifehacks = cache(async () => {
  const fileNames = getFileNames('content/lifehacks');
  const fileNamesWithoutExtension = fileNames.map(fileName => {
    return fileName.substring(0, fileName.length - 3);
  });

  const lifehacks = fileNamesWithoutExtension.map(fileName => {
    const { metadata } = parseMarkdownFile(`content/lifehacks/${fileName}.md`);
    const validatedMetadata = validateLifehackMarkdownMetadata(metadata);

    return {
      fileName,
      ...validatedMetadata,
    };
  });

  lifehacks.sort((a, b) => {
    const first = dayjs(a.createdAt);
    const second = dayjs(b.createdAt);
    if (first.isAfter(second)) return -1;
    else if (first.isBefore(second)) return 1;
    return 0;
  });

  return lifehacks;
});

const Page = async () => {
  const lifehacks = await getLifehacks();
  const tags = [...new Set(lifehacks.map(lifehack => lifehack.tag))];
  tags.sort();

  return <LifehacksPage lifehacks={lifehacks} tags={tags} />;
};

export default Page;
