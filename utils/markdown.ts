import fs from 'fs';
import matter from 'gray-matter';
import { marked } from 'marked';
import path from 'path';

export const parseMarkdownToHtml = async (markdown: string) => {
  return (
    marked
      .parse(markdown)
      // escape처리 된 것을 복원한다.
      .replaceAll('&#39;', `'`)
      .replaceAll('&quot;', `"`)
  );
};

export const parseMarkdownFile = (fileName: string) => {
  const fullPath = path.join(process.cwd(), fileName);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    metadata: data,
    content,
  };
};
