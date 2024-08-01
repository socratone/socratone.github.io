---
title: 'Tailwind class 참고 문서'
description: 'tailwind의 class는 CSS property와 닮아 있지만 익숙하지 않으면 매번 찾아야 하기 때문에 정리해 둔다.'
thumbnail: 'tailwind'
tag: 'tailwind'
createdAt: '2024-08-01'
---

# Tailwind class 참고 문서

tailwind의 class는 CSS property와 닮아 있지만 익숙하지 않으면 매번 찾아야 하기 때문에 정리해 둔다.\
자세한 내용은 아래 강의에서 확인할 수 있다.

https://www.udemy.com/course/tailwind-from-scratch

## Colors

```xml
<!-- Default colors -->
<!-- white, black, red, green, blue, orange, yellow, purple, lime, emerald, teal, cyan, indigo, violet, fuchsia, pink, rose, sky, gray, slate, zinc, neutral, stone, amber,  -->

<!-- Text Colors -->
<p class="text-black">Tailwind is awesome</p>
<p class="text-red-50">Tailwind is awesome</p>
<p class="text-red-100">Tailwind is awesome</p>
<p class="text-red-200">Tailwind is awesome</p>
<p class="text-red-300">Tailwind is awesome</p>
<p class="text-red-400">Tailwind is awesome</p>
<p class="text-red-500">Tailwind is awesome</p>
<p class="text-red-600">Tailwind is awesome</p>
<p class="text-red-700">Tailwind is awesome</p>
<p class="text-red-800">Tailwind is awesome</p>
<p class="text-red-900">Tailwind is awesome</p>

<!-- Background Colors -->
<div class="bg-slate-600">
  <p class="text-white">Tailwind is awesome</p>
</div>
<div class="bg-zinc-400">
  <p class="text-white">Tailwind is awesome</p>
</div>
<div class="bg-emerald-600">
  <p class="text-white">Tailwind is awesome</p>
</div>

<!-- Text Underline -->
<p class="underline text-red-700 decoration-red-700">Tailwind is awesome</p>
<p class="underline text-blue-700 decoration-blue-700">
  Tailwind is awesome
</p>

<!-- Border Colors -->
<input class="border-2 border-rose-500" />
<input class="border-2 border-blue-300" />
<input class="border-2 border-purple-900" />
<input class="border-2 border-yellow-500" />

<!-- Divide Colors -->
<div class="divide-y divide-blue-200">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</div>

<!-- Outline Colors -->
<button class="outline outline-blue-500">Subscribe</button>
<button class="outline outline-purple-300">Subscribe</button>
<button class="outline outline-gray-500">Subscribe</button>

<!-- Box Shadow Colors (Opacity defaults to 100, but you cans set it)-->
<button class="bg-cyan-500 shadow-lg shadow-cyan-500">Subscribe</button>
<button class="bg-blue-500 shadow-lg shadow-blue-500/50">Subscribe</button>
<button class="bg-indigo-500 shadow-lg shadow-indigo-500/50">
  Subscribe
</button>

<!-- Accent Colors -->
<input type="checkbox" class="accent-purple-500" checked /> Option 1
<input type="checkbox" class="accent-pink-500" checked /> Option 2
<input type="checkbox" class="accent-red-300" checked /> Option 3

<!-- Arbitrary Colors -->
<div class="bg-[#427fab] h-10">Hello</div>
<div class="text-[#427fab] h-10">Hello</div>
<div class="border border-[#427fab] h-10">Hello</div>
```
