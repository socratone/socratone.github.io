import fs from 'fs';
import matter from 'gray-matter';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import json from 'highlight.js/lib/languages/json';
import python from 'highlight.js/lib/languages/python';
import { marked } from 'marked';
import path from 'path';

type Language = 'language-javascript' | 'language-json' | 'language-python';

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

const getClassText = (text: string) => {
  const pattern = /class="([^"]*)"/;
  const match = text.match(pattern);

  if (match) {
    return match[1];
  }

  return '';
};

const getCodeOpenTagText = (html: string) => {
  const found = html.match(/<code class="[a-z-]*">/);
  return found ? found[0] : null;
};

const getCodeOpenTagIndex = (html: string, codeOpenTagText: string) => {
  return html.indexOf(codeOpenTagText);
};

const getCodeCloseTagIndex = (html: string, codeOpenTagIndex: number) => {
  const index = html.substring(codeOpenTagIndex).indexOf('</code>');
  return index === -1 ? Infinity : index + codeOpenTagIndex;
};

const addColorTagToCode = (code: string, language: Language) => {
  switch (language) {
    case 'language-javascript':
      hljs.registerLanguage(language, javascript);
      break;

    case 'language-json':
      hljs.registerLanguage(language, json);
      break;

    case 'language-python':
      hljs.registerLanguage(language, python);
      break;

    default:
      throw new Error(`${language} language is not supported.`);
  }

  const highlightedCode = hljs.highlight(code, {
    language,
  }).value;

  return highlightedCode;
};

/** code에 color를 넣어준다. */
export const addCodeColorToHtml = (html: string) => {
  let rest = html;
  let result = '';

  while (rest.length > 0) {
    const codeOpenTagText = getCodeOpenTagText(rest);

    if (!codeOpenTagText) {
      return result + rest;
    }

    const classText = getClassText(codeOpenTagText);

    const codeOpenTagIndex = getCodeOpenTagIndex(rest, codeOpenTagText);
    const codeCloseTagIndex = getCodeCloseTagIndex(rest, codeOpenTagIndex);

    const innerText = rest.substring(
      codeOpenTagIndex + codeOpenTagText.length,
      codeCloseTagIndex
    );

    const coloredInnerText = addColorTagToCode(
      innerText,
      classText as Language
    );

    const coloredCode = codeOpenTagText + coloredInnerText + '</code>';

    result += rest.substring(0, codeOpenTagIndex) + coloredCode;
    rest = rest.substring(codeCloseTagIndex + 7);
  }

  return result;
};
