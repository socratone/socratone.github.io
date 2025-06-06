import {
  BASE_URL,
  DOCTRINES_DESCRIPTION,
  DOCTRINES_TITLE,
  HOME_IMAGES,
} from 'constants/seo';
import dayjs from 'dayjs';
import { validateDoctrineMarkdownMetadata } from 'helpers/markdown';
import type { Metadata } from 'next';
import { cache } from 'react';
import { getFileNames } from 'utils/file';
import { parseMarkdownFile } from 'utils/markdown';

import DoctrinesPage from './doctrines-page';

export const metadata: Metadata = {
  title: DOCTRINES_TITLE,
  description: DOCTRINES_DESCRIPTION,
  openGraph: {
    title: DOCTRINES_TITLE,
    description: DOCTRINES_DESCRIPTION,
    type: 'website',
    siteName: 'Socratone',
    images: HOME_IMAGES,
  },
  alternates: {
    canonical: `${BASE_URL}/doctrines`,
  },
};

const getDoctrines = cache(async () => {
  const fileNames = getFileNames('content/doctrines');
  const fileNamesWithoutExtension = fileNames.map(fileName => {
    return fileName.substring(0, fileName.length - 3);
  });

  const doctrines = fileNamesWithoutExtension.map(fileName => {
    const { metadata } = parseMarkdownFile(`content/doctrines/${fileName}.md`);
    const validatedMetadata = validateDoctrineMarkdownMetadata(metadata);

    return {
      fileName,
      ...validatedMetadata,
    };
  });

  doctrines.sort((a, b) => {
    const first = dayjs(a.createdAt);
    const second = dayjs(b.createdAt);
    if (first.isAfter(second)) return -1;
    else if (first.isBefore(second)) return 1;
    return 0;
  });

  return doctrines;
});

const Page = async () => {
  const doctrines = await getDoctrines();
  const tags = [...new Set(doctrines.map(doctrine => doctrine.tag))];
  tags.sort();

  return <DoctrinesPage doctrines={doctrines} tags={tags} />;
};

export default Page;
