import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import json from 'highlight.js/lib/languages/json';
import python from 'highlight.js/lib/languages/python';
import sql from 'highlight.js/lib/languages/sql';

type Language =
  | 'language-javascript'
  | 'language-json'
  | 'language-python'
  | 'language-sql';

export const CODE_COPY_BUTTON_CLASS = 'code-copy-button';

const DISPLAY_BLOCK = 'block';
const DISPLAY_NONE = 'none';
const PRE_CLOSE_TAG = '</pre>';
const CODE_CLOSE_TAG = '</code>';

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
  const index = html.substring(codeOpenTagIndex).indexOf(CODE_CLOSE_TAG);
  return index === -1 ? Infinity : index + codeOpenTagIndex;
};

const getPreOpenTagText = (html: string) => {
  const found = html.match(/<pre>/);
  return found ? found[0] : null;
};

const getPreOpenTagIndex = (html: string, preOpenTagText: string) => {
  return html.indexOf(preOpenTagText);
};

const getPreCloseTagIndex = (html: string, preOpenTagIndex: number) => {
  const index = html.substring(preOpenTagIndex).indexOf(PRE_CLOSE_TAG);
  return index === -1 ? Infinity : index + preOpenTagIndex;
};

const addColorTag = (code: string, language: Language) => {
  let editedCode = code;

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

    case 'language-sql':
      hljs.registerLanguage(language, sql);
      editedCode = code.replaceAll('&lt;', `<`).replaceAll('&gt;', `>`);
      break;

    default:
      throw new Error(`${language} language is not supported.`);
  }

  const highlightedCode = hljs.highlight(editedCode, {
    language,
  }).value;

  return highlightedCode;
};

/** code에 color를 넣는다. */
export const addColorToCode = (html: string) => {
  let rest = html;
  let result = '';

  while (rest.length > 0) {
    const codeOpenTagText = getCodeOpenTagText(rest);

    /** <code class="...">가 없으면 종료 */
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

    const coloredInnerText = addColorTag(innerText, classText as Language);

    const coloredCode = codeOpenTagText + coloredInnerText + CODE_CLOSE_TAG;

    result += rest.substring(0, codeOpenTagIndex) + coloredCode;
    rest = rest.substring(codeCloseTagIndex + 7);
  }

  return result;
};

const copyToClipboard = (text: string) => {
  return navigator.clipboard.writeText(text);
};

const copyCode: EventListener = (event) => {
  const buttonElement: HTMLButtonElement | undefined =
    event.currentTarget as any;
  const codeElement = buttonElement?.parentElement ?? undefined;
  const text = codeElement?.textContent ?? '';
  copyToClipboard(text)
    .then(() => {
      const copyIconElement =
        buttonElement?.firstElementChild as SVGElement | null;
      const copyIconWithCheckElement =
        buttonElement?.lastElementChild as SVGElement | null;

      if (copyIconElement && copyIconWithCheckElement) {
        copyIconElement.style.display = DISPLAY_NONE;
        copyIconWithCheckElement.style.display = DISPLAY_BLOCK;

        setTimeout(() => {
          copyIconElement.style.display = DISPLAY_BLOCK;
          copyIconWithCheckElement.style.display = DISPLAY_NONE;
        }, 2000);
      }
    })
    .catch(() => {
      alert('현재 버전에서 지원하지 않는 기능입니다.');
    });
};

export const addCopyButtonEvents = () => {
  const buttons = document.querySelectorAll(`.${CODE_COPY_BUTTON_CLASS}`);
  buttons.forEach((button) => {
    button.addEventListener('click', copyCode);
  });
};

export const removeCopyButtonEvents = () => {
  const buttons = document.querySelectorAll(`.${CODE_COPY_BUTTON_CLASS}`);
  buttons.forEach((button) => {
    button.removeEventListener('click', copyCode);
  });
};

const copyIcon = `
<svg width="16" height="16" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
  <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z"></path>
</svg>`;

const copyIconWithCheck = `
<svg style="display: ${DISPLAY_NONE};" width="16" height="16" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
  <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z"></path>
</svg>`;

/** code에 copy 버튼을 넣는다. */
export const addCopyButtonToCode = (html: string) => {
  let rest = html;
  let result = '';

  while (rest.length > 0) {
    const preOpenTagText = getPreOpenTagText(rest);

    /** <pre>가 없으면 종료 */
    if (!preOpenTagText) {
      return result + rest;
    }

    const preOpenTagIndex = getPreOpenTagIndex(rest, preOpenTagText);
    const preCloseTagIndex = getPreCloseTagIndex(rest, preOpenTagIndex);

    const innerText = rest.substring(
      preOpenTagIndex + preOpenTagText.length,
      preCloseTagIndex
    );

    const preWithButton =
      '<div class="code-wrapper">' +
      preOpenTagText +
      innerText +
      PRE_CLOSE_TAG +
      `<button class="${CODE_COPY_BUTTON_CLASS}">${copyIcon}${copyIconWithCheck}</button>` +
      '</div>';

    result += rest.substring(0, preOpenTagIndex) + preWithButton;
    rest = rest.substring(preCloseTagIndex + PRE_CLOSE_TAG.length);
  }

  return result;
};
