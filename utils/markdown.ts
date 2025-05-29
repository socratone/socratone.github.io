import fs from 'fs';
import matter from 'gray-matter';
import { JSDOM } from 'jsdom';
import { marked } from 'marked';
import path from 'path';

import { convertHeadingContentToId } from './html-code';

/** server side only */

/**
 * 마크다운 문자열을 HTML로 변환하는 함수
 *
 * @description
 * 이 함수는 마크다운 형식의 텍스트를 HTML로 파싱합니다.
 * marked 라이브러리를 사용하여 변환하고, 다음과 같은 처리를 수행합니다:
 * 1. 특수 문자의 escape 처리(&#39;, &quot;)를 원래 문자('와 ")로 복원
 * 2. 연속된 줄바꿈(\n\n)을 <br> 태그로 변환하여 줄바꿈 유지
 * 3. 마크다운 내 줄바꿈을 HTML에서도 유지 (백슬래시 여부와 관계없이)
 *
 * @param {string} markdown - HTML로 변환할 마크다운 문자열
 * @returns {Promise<string>} 변환된 HTML 문자열
 */
/**
 * 마크다운 문자열을 HTML로 변환하는 함수
 *
 * @description
 * 이 함수는 마크다운 형식의 텍스트를 HTML로 파싱합니다.
 * 다음과 같은 처리를 수행합니다:
 * 1. 백슬래시로 끝나는 줄바꿈 처리
 * 2. 단락(p 태그) 내부의 모든 줄바꿈을 <br> 태그로 변환
 * 3. 특수 문자의 escape 처리 복원
 *
 * @param {string} markdown - HTML로 변환할 마크다운 문자열
 * @returns {Promise<string>} 변환된 HTML 문자열
 */
export const parseMarkdownToHtml = async (markdown: string) => {
  // 백슬래시로 끝나는 줄은 특별히 처리 (마크다운 강제 줄바꿈)
  // 이 부분은 marked가 처리하기 전에 특수 마커로 변환
  const processedMarkdown = markdown.replace(/\\\n/g, '@@LINEBREAK@@');

  // marked 옵션 설정 - 줄바꿈을 <br>로 변환하지 않도록 함
  marked.setOptions({
    breaks: false, // 기본 줄바꿈 비활성화
  });

  // HTML로 변환
  let html = marked.parse(processedMarkdown);

  // escape처리 된 것을 복원
  html = html.replaceAll('&#39;', `'`).replaceAll('&quot;', `"`);

  // 백슬래시로 끝나는 줄바꿈 마커를 <br>로 변환
  html = html.replace(/@@LINEBREAK@@/g, '<br>');

  // JSDOM을 사용하여 HTML 문서 구조를 조작
  const { window } = new JSDOM(html);
  const document = window.document;

  // 모든 p 태그를 찾아서 줄바꿈을 <br>로 변환
  const paragraphs = document.querySelectorAll('p');
  paragraphs.forEach(p => {
    // 텍스트 노드를 처리하여 줄바꿈을 <br>로 변환
    const html = p.innerHTML;

    // 텍스트 내의 줄바꿈을 <br>로 변환
    p.innerHTML = html.replace(/\n/g, '<br>');
  });

  // <p> 태그 사이에만 <br> 태그 추가
  // 마크다운에서 연속된 줄바꿈이 있는 경우 단락 사이에 <br> 태그 추가
  const bodyHtml = document.body.innerHTML;
  // p태그 사이에 줄바꿈(\n)이 있는 경우에만 <br> 태그 추가
  const processedHtml = bodyHtml.replace(/<\/p>\n<p>/g, '</p><br><p>');

  return processedHtml;
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

export type TableOfContent = { level: number; text: string };

export const generateTableOfContents = (html: string) => {
  const { window } = new JSDOM(html);
  const document = window.document;

  const results: TableOfContent[] = [];

  ['h2', 'h3', 'h4', 'h5', 'h6'].forEach(headingTag => {
    const elements: NodeListOf<HTMLHeadingElement> =
      document.querySelectorAll(headingTag);
    elements.forEach(element => {
      element.classList.add('heading');
    });
  });

  const headingElements: NodeListOf<HTMLHeadingElement> =
    document.querySelectorAll('.heading');

  headingElements.forEach(element => {
    const text = element.textContent?.trim() ?? '';
    const level = parseInt(element.tagName.substring(1)) - 2; // h2가 제일 높은 level인 0
    results.push({ level, text });
  });

  return results;
};

export const addHashLinkToHeading = (html: string) => {
  const { window } = new JSDOM(html);
  const document = window.document;

  ['h2', 'h3', 'h4', 'h5', 'h6'].forEach(headingTag => {
    const elements: NodeListOf<HTMLHeadingElement> =
      document.querySelectorAll(headingTag);
    elements.forEach(element => {
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
  return document.documentElement.outerHTML.replaceAll('&gt;', '>');
};
