import { addHashLinkToHeading } from './markdown';

describe('addHashLinkToHeading', () => {
  describe('javascript', () => {
    test('<code> 태그 내 javascript 화살표 함수 기호를 망가뜨리지 않아야 한다.', () => {
      const html = `<pre><code class="language-javascript">() => {}</code></pre>`;
      const result = `<html><head></head><body><pre><code class="language-javascript">() => {}</code></pre></body></html>`;
      expect(addHashLinkToHeading(html)).toBe(result);
    });
  });
});
