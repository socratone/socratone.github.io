import { addColorToCode } from './html-code';

describe('addColorToCode', () => {
  test('class가 없는 code를 써도 정상 작동해야 한다. 뒤따라 나오는 class 있는 code에 영향을 주면 안 된다.', () => {
    const html = `<p><code>나이</code>나</p>
  <pre><code class="language-python">from sklearn.compose import ColumnTransformer
  from sklearn.preprocessing import OneHotEncoder
  </code></pre>`;

    const result = `<p><code>나이</code>나</p>
  <pre><code class="language-python"><span class="hljs-keyword">from</span> sklearn.compose <span class="hljs-keyword">import</span> ColumnTransformer
  <span class="hljs-keyword">from</span> sklearn.preprocessing <span class="hljs-keyword">import</span> OneHotEncoder
  </code></pre>`;

    expect(addColorToCode(html)).toBe(result);
  });

  describe('sql', () => {
    test(`<code> 내 '<'과 '>'을 나타내는 '&lt;'과 '&gt;'이 유지되어야 한다.`, () => {
      const html = `<pre><code class="language-sql">create database &lt;이름&gt;;
      </code></pre>`;

      const result = `<pre><code class="language-sql"><span class="hljs-keyword">create</span> database <span class="hljs-operator">&lt;</span>이름<span class="hljs-operator">&gt;</span>;
      </code></pre>`;

      expect(addColorToCode(html)).toBe(result);
    });
  });

  describe('javascript', () => {
    test(`<code> 내 '<'과 '>'을 나타내는 '&lt;'과 '&gt;'이 유지되어야 한다.`, () => {
      const html = `<pre><code class="language-javascript">&lt;html&gt;</code></pre>`;

      const result = `<pre><code class="language-javascript">&lt;html&gt;</code></pre>`;

      expect(addColorToCode(html)).toBe(result);
    });
  });
});
