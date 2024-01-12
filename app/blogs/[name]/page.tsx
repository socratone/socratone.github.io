// color code style
// https://highlightjs.org/examples
import 'highlight.js/styles/atom-one-light.css';

import { validateMarkdownMetadata } from 'helpers/markdown';
import { Metadata } from 'next';
import { cache } from 'react';
import { getFileNames } from 'utils/file';
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

export async function generateStaticParams() {
  const fileNames = getFileNames('content/blogs');
  const fileNamesWithoutExtension = fileNames.map(fileName => {
    return fileName.substring(0, fileName.length - 3);
  });
  const paths = fileNamesWithoutExtension.map(fileName => {
    return {
      name: fileName,
    };
  });

  return paths;
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

export async function generateMetadata({
  params: { name },
}: PageProps): Promise<Metadata> {
  const { metadata } = await getMarkdownData(name);

  return {
    title: metadata.title,
    description: metadata.description,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
    },
  };
}

const Page = async ({ params: { name } }: PageProps) => {
  const { htmlContent, tableOfContents } = await getMarkdownData(name);

  return (
    <BlogPage htmlContent={htmlContent} tableOfContents={tableOfContents} />
  );
};

export default Page;
