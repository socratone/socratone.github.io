import { addCodeColorToHtml } from './markdown';

test('class가 없는 code를 써도 정상 작동해야 한다. 뒤따라 나오는 class 있는 code에 영향을 주면 안 된다.', () => {
  const html = `<p><code>나이</code>나</p>
<pre><code class="language-python">from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import OneHotEncoder
</code></pre>`;

  const result = `<p><code>나이</code>나</p>
<pre><code class="language-python"><span class="hljs-keyword">from</span> sklearn.compose <span class="hljs-keyword">import</span> ColumnTransformer
<span class="hljs-keyword">from</span> sklearn.preprocessing <span class="hljs-keyword">import</span> OneHotEncoder
</code></pre>`;

  expect(addCodeColorToHtml(html)).toBe(result);
});
