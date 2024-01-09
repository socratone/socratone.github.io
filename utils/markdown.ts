import fs from 'fs';
import matter from 'gray-matter';
import { JSDOM } from 'jsdom';
import { marked } from 'marked';
import path from 'path';

import { convertHeadingContentToId } from './html-code';

/** server side only */

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

export type TableOfContents = { level: number; text: string }[];

export const generateTableOfContents = (html: string) => {
  const { window } = new JSDOM(html);
  const document = window.document;

  const results: TableOfContents = [];

  ['h2', 'h3', 'h4', 'h5', 'h6'].forEach((headingTag) => {
    const elements: NodeListOf<HTMLHeadingElement> =
      document.querySelectorAll(headingTag);
    elements.forEach((element) => {
      element.classList.add('heading');
    });
  });

  const headingElements: NodeListOf<HTMLHeadingElement> =
    document.querySelectorAll('.heading');

  headingElements.forEach((element) => {
    const text = element.textContent?.trim() ?? '';
    const level = parseInt(element.tagName.substring(1)) - 2; // h2가 제일 높은 level인 0
    results.push({ level, text });
  });

  return results;
};

export const addHashLinkToHeading = (html: string) => {
  const { window } = new JSDOM(html);
  const document = window.document;

  ['h2', 'h3', 'h4', 'h5', 'h6'].forEach((headingTag) => {
    const elements: NodeListOf<HTMLHeadingElement> =
      document.querySelectorAll(headingTag);
    elements.forEach((element) => {
      element.classList.add('heading');
      if (element.textContent) {
        const id = convertHeadingContentToId(element.textContent);
        element.id = id;
        element.insertAdjacentHTML(
          'beforeend',
          `<a href="#${id}" class="heading-anchor"> 🔗</a>`
        );
      }
    });
  });

  /** 깨지는 문자 복원 */
  return document.documentElement.outerHTML
    .replaceAll('&gt;', '>')
    .replaceAll('&lt;', '<');
};
