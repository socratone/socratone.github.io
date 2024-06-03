import { getBlogPaths } from '../helpers/path';
import path from 'path';
import fs from 'fs';
import { parseMarkdownFile } from '../utils/markdown';
import { getFirstArgumentInNodeCli } from '../utils/node';

const main = async () => {
  const data: any = [];
  const blogPaths = await getBlogPaths('blogs');
  blogPaths.forEach(blogPath => {
    const { metadata } = parseMarkdownFile(`content/blogs/${blogPath.name}.md`);
    data.push({
      title: metadata.title,
      slug: blogPath.name,
    });
  });
  const outPath = getFirstArgumentInNodeCli();

  const filePath = `${outPath}/blogs-metadata.json`;
  const fullPath = path.join(process.cwd(), filePath);

  fs.writeFileSync(fullPath, JSON.stringify(data, null, 2), 'utf-8');
};

main();
