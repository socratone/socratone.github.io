/*
 * color code style
 * https://highlightjs.org/examples
 */
import 'highlight.js/styles/atom-one-light.css';

import { BASE_URL } from 'constants/url';
import { validateMarkdownMetadata } from 'helpers/markdown';
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

import BlogPage from './blog-page';

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
    metadataBase: new URL(BASE_URL),
    title: metadata.title,
    description: metadata.description,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      type: 'website',
      siteName: 'Socratone',
      images: '/images/resume/profile.webp',
    },
    alternates: {
      canonical: `/blogs/${name}`,
    },
  };
}

export async function generateStaticParams() {
  return getBlogPaths();
}

const getMarkdownData = cache(async (name: string) => {
  if (typeof name !== 'string') {
    throw new Error('Invalid name.');
  }

  const { metadata, content } = parseMarkdownFile(`content/blogs/${name}.md`);
  const htmlContent = await parseMarkdownToHtml(content);
  const tableOfContents = generateTableOfContents(htmlContent);
  const contentWithLinkedHeading = addHashLinkToHeading(htmlContent);
  const coloredHtmlContent = addColorToCode(contentWithLinkedHeading);
  const codeWithButton = addCopyButtonToCode(coloredHtmlContent);
  const validatedMetadata = validateMarkdownMetadata(metadata);

  return {
    metadata: validatedMetadata,
    htmlContent: codeWithButton,
    tableOfContents,
  };
});

const Page = async ({ params: { name } }: PageProps) => {
  const { htmlContent, tableOfContents } = await getMarkdownData(name);

  return (
    <BlogPage htmlContent={htmlContent} tableOfContents={tableOfContents} />
  );
};

export default Page;
