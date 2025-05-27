import {
  BASE_URL,
  HOME_IMAGES,
  MUSICS_DESCRIPTION,
  MUSICS_TITLE,
} from 'constants/seo';
import dayjs from 'dayjs';
import { validateMusicMarkdownMetadata } from 'helpers/markdown';
import type { Metadata } from 'next';
import { cache } from 'react';
import { getFileNames } from 'utils/file';
import { parseMarkdownFile } from 'utils/markdown';

import Musics from './components/Musics';

export const metadata: Metadata = {
  title: MUSICS_TITLE,
  description: MUSICS_DESCRIPTION,
  openGraph: {
    title: MUSICS_TITLE,
    description: MUSICS_DESCRIPTION,
    type: 'website',
    siteName: 'Socratone',
    images: HOME_IMAGES,
  },
  alternates: {
    canonical: `${BASE_URL}/musics`,
  },
};

const getMusics = cache(async () => {
  const fileNames = getFileNames('content/musics');
  const fileNamesWithoutExtension = fileNames.map(fileName => {
    return fileName.substring(0, fileName.length - 3);
  });

  const musics = fileNamesWithoutExtension.map(fileName => {
    const { metadata } = parseMarkdownFile(`content/musics/${fileName}.md`);
    const validatedMetadata = validateMusicMarkdownMetadata(metadata);

    return {
      fileName,
      ...validatedMetadata,
    };
  });

  musics.sort((a, b) => {
    const first = dayjs(a.createdAt);
    const second = dayjs(b.createdAt);
    if (first.isAfter(second)) return -1;
    else if (first.isBefore(second)) return 1;
    return 0;
  });

  return musics;
});

const Page = async () => {
  const musics = await getMusics();
  const tags = [...new Set(musics.map(music => music.tag))];
  // TODO: sorting select
  tags.sort();

  return <Musics musics={musics} />;
};

export default Page;
