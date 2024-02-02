import { getBlogPaths } from '../helpers/path';
import path from 'path';
import fs from 'fs';
import { parseMarkdownFile } from '../utils/markdown';

/** 첫 번째 arg를 불러온다. */
const getOutPathArgument = () => {
  let outPath = null;

  /** node something.js 뒤에 추가적으로 입력된 string을 가져온다. */
  process.argv.forEach((value, index) => {
    if (index === 2) {
      outPath = value;
    }
  });

  if (!outPath) {
    throw new Error('Out path is not defined.');
  }

  return outPath;
};

const main = async () => {
  const data: any = [];
  const blogPaths = await getBlogPaths();
  blogPaths.forEach(blogPath => {
    const { metadata } = parseMarkdownFile(`content/blogs/${blogPath.name}.md`);
    data.push({
      title: metadata.title,
      slug: blogPath.name,
    });
  });
  const outPath = getOutPathArgument();

  const filePath = `${outPath}/blogs-metadata.json`;
  const fullPath = path.join(process.cwd(), filePath);

  fs.writeFileSync(fullPath, JSON.stringify(data, null, 2), 'utf-8');
};

main();
