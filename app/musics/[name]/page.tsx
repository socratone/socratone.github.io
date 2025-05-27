/*
 * color code style
 * https://highlightjs.org/examples
 */
import 'highlight.js/styles/atom-one-light.css';

import { BASE_URL, HOME_IMAGES } from 'constants/seo';
import BlogPage from 'feature/blogs/BlogPage';
import { validateMusicMarkdownMetadata } from 'helpers/markdown';
import { getBlogPaths } from 'helpers/path';
import type { Metadata } from 'next';
import { cache } from 'react';
import { addColorToCode, addCopyButtonToCode } from 'utils/html-code';
import {
  addHashLinkToHeading,
  generateTableOfContents,
  parseMarkdownFile,
  parseMarkdownToHtml,
} from 'utils/markdown';

type PageProps = {
  params: {
    name: string;
  };
};

export async function generateMetadata({
  params: { name },
}: PageProps): Promise<Metadata> {
  const { metadata } = await getMarkdownData(name);

  return {
    title: metadata.title,
    description: metadata.title,
    openGraph: {
      title: metadata.title,
      description: metadata.title,
      type: 'website',
      siteName: 'Socratone',
      images: HOME_IMAGES,
    },
    alternates: {
      canonical: `${BASE_URL}/musics/${name}`,
    },
  };
}

export async function generateStaticParams() {
  return getBlogPaths('musics');
}

const getMarkdownData = cache(async (name: string) => {
  if (typeof name !== 'string') {
    throw new Error('Invalid name.');
  }

  const { metadata, content } = parseMarkdownFile(`content/musics/${name}.md`);
  const htmlContent = await parseMarkdownToHtml(content);
  const tableOfContents = generateTableOfContents(htmlContent);
  const contentWithLinkedHeading = addHashLinkToHeading(htmlContent);
  const coloredHtmlContent = addColorToCode(contentWithLinkedHeading);
  const codeWithButton = addCopyButtonToCode(coloredHtmlContent);
  const validatedMetadata = validateMusicMarkdownMetadata(metadata);

  return {
    metadata: validatedMetadata,
    htmlContent: codeWithButton,
    tableOfContents,
  };
});

const Page = async ({ params: { name } }: PageProps) => {
  const { htmlContent, tableOfContents, metadata } = await getMarkdownData(
    name
  );

  return (
    <BlogPage
      videoId={metadata.videoId}
      htmlContent={htmlContent}
      tableOfContents={tableOfContents}
    />
  );
};

export default Page;
