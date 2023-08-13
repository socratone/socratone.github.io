import Meta from 'components/Meta';
import NotionStyleHtmlContent from 'components/NotionStyleHtmlContent';
import { BlogThumbnail } from 'constants/blog';
import { validateMarkdownMetadata } from 'helpers/markdown';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { getFileNames } from 'utils/file';
import { parseMarkdownFile, parseMarkdownToHtml } from 'utils/markdown';

type Metadata = {
  title: string;
  description: string;
  thumbnail: BlogThumbnail;
};

type BlogProps = {
  metadata: Metadata;
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

  validateMarkdownMetadata(metadata);
  const validatedMetadata = metadata as Metadata;

  return { props: { metadata: validatedMetadata, htmlContent } };
};

const Blog: NextPage<BlogProps> = ({ metadata, htmlContent }) => {
  return (
    <>
      {/* TODO: thumbnail에 따라 imageUrl 설정 */}
      <Meta title={metadata.title} description={metadata.description} />
      <NotionStyleHtmlContent html={htmlContent} />
    </>
  );
};

export default Blog;
