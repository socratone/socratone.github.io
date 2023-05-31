import 'github-markdown-css';

import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { getFileNames } from 'utils/file';
import { parseMarkdownFile, parseMarkdownToHtml } from 'utils/markdown';

type BlogProps = {
  metadata: {
    [key: string]: any;
  };
  htmlContent: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const fileNames = getFileNames('content/blogs');
  const fileNamesWithoutExtension = fileNames.map((fileName) => {
    return fileName.substring(0, fileName.length - 3);
  });
  const paths = fileNamesWithoutExtension.map((fileName) => {
    return {
      params: {
        name: fileName,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BlogProps> = async ({ params }) => {
  const name = params?.name;
  if (typeof name !== 'string') {
    throw new Error('Invalid name.');
  }
  const { metadata, content } = parseMarkdownFile(`content/blogs/${name}.md`);
  const htmlContent = await parseMarkdownToHtml(content);

  return { props: { metadata, htmlContent } };
};

// TODO: metadata 설정
const Blog: NextPage<BlogProps> = ({ htmlContent }) => {
  return (
    <section
      className="markdown-body"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};

export default Blog;
