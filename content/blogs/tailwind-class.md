---
title: 'Tailwind Class 참고 문서'
description: 'tailwind의 class는 CSS property와 닮아 있지만 익숙하지 않으면 매번 찾아야 하기 때문에 정리해 둔다.'
thumbnail: 'tailwind'
tag: 'tailwind'
createdAt: '2024-08-01'
---

# Tailwind Class 참고 문서

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

## Container Spacing

```xml
<div class="container mx-auto">
  <article class="bg-slate-300">
    <h3>Article One</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Exercitationem laboriosam libero molestiae recusandae accusantium
      voluptates? Expedita dignissimos amet eveniet dolore nobis odio a
      sunt, maiores quasi. Modi amet quos dolores!
    </p>
  </article>

  <!-- Margin -->
  <h3 class="my-4">Margin</h3>
  <div class="m-4 bg-slate-100">m-4</div>
  <div class="mx-4 bg-slate-200">mx-4</div>
  <div class="my-4 bg-slate-300">my-4</div>
  <div class="mt-6 bg-slate-400">mt-6</div>
  <div class="mr-4 bg-slate-500">mr-4</div>
  <div class="mb-8 bg-slate-600">mb-8</div>
  <div class="ml-2 bg-slate-700">ml-2</div>
  <!-- Arbitrary Spacing -->
  <div class="ml-[200px] bg-slate-700">ml-[200px]</div>

  <!-- Padding -->
  <h3 class="my-4">Padding</h3>
  <div class="p-4 bg-slate-100">p-4</div>
  <div class="px-4 bg-slate-200">px-4</div>
  <div class="py-4 bg-slate-300">py-4</div>
  <div class="pt-6 bg-slate-400">pt-6</div>
  <div class="pr-4 bg-slate-500">pr-4</div>
  <div class="pb-8 bg-slate-600">pb-8</div>
  <div class="pl-2 bg-slate-700">pl-2</div>

  <!-- Space Between X -->
  <h3 class="my-4">Space Between X</h3>
  <div class="flex space-x-4">
    <div class="p-3 bg-red-100">01</div>
    <div class="p-3 bg-red-100">02</div>
    <div class="p-3 bg-red-100">03</div>
  </div>

  <!-- Space Between Y -->
  <h3 class="my-4">Space Between Y</h3>
  <div class="flex flex-col space-y-4">
    <div class="p-3 bg-red-100">01</div>
    <div class="p-3 bg-red-100">02</div>
    <div class="p-3 bg-red-100">03</div>
  </div>
</div>

<!-- Breakpoinsts for Container
  container	None	width: 100%;
  sm (640px)	    max-width: 640px;
  md (768px)	    max-width: 768px;
  lg (1024px)	    max-width: 1024px;
  xl (1280px)	    max-width: 1280px;
  2xl (1536px)	  max-width: 1536px;
-->

<!-- Margin Values
  m-0	margin: 0px;
  mx-0	margin-left: 0px;
  margin-right: 0px;
  my-0	margin-top: 0px;
  margin-bottom: 0px;
  mt-0	margin-top: 0px;
  mr-0	margin-right: 0px;
  mb-0	margin-bottom: 0px;
  ml-0	margin-left: 0px;
  m-px	margin: 1px;
  mx-px	margin-left: 1px;
  margin-right: 1px;
  my-px	margin-top: 1px;
  margin-bottom: 1px;
  mt-px	margin-top: 1px;
  mr-px	margin-right: 1px;
  mb-px	margin-bottom: 1px;
  ml-px	margin-left: 1px;
  m-0.5	margin: 0.125rem; /* 2px */
  mx-0.5	margin-left: 0.125rem; /* 2px */
  margin-right: 0.125rem; /* 2px */
  my-0.5	margin-top: 0.125rem; /* 2px */
  margin-bottom: 0.125rem; /* 2px */
  mt-0.5	margin-top: 0.125rem; /* 2px */
  mr-0.5	margin-right: 0.125rem; /* 2px */
  mb-0.5	margin-bottom: 0.125rem; /* 2px */
  ml-0.5	margin-left: 0.125rem; /* 2px */
  m-1	margin: 0.25rem; /* 4px */
  mx-1	margin-left: 0.25rem; /* 4px */
  margin-right: 0.25rem; /* 4px */
  my-1	margin-top: 0.25rem; /* 4px */
  margin-bottom: 0.25rem; /* 4px */
  mt-1	margin-top: 0.25rem; /* 4px */
  mr-1	margin-right: 0.25rem; /* 4px */
  mb-1	margin-bottom: 0.25rem; /* 4px */
  ml-1	margin-left: 0.25rem; /* 4px */
  m-1.5	margin: 0.375rem; /* 6px */
  mx-1.5	margin-left: 0.375rem; /* 6px */
  margin-right: 0.375rem; /* 6px */
  my-1.5	margin-top: 0.375rem; /* 6px */
  margin-bottom: 0.375rem; /* 6px */
  mt-1.5	margin-top: 0.375rem; /* 6px */
  mr-1.5	margin-right: 0.375rem; /* 6px */
  mb-1.5	margin-bottom: 0.375rem; /* 6px */
  ml-1.5	margin-left: 0.375rem; /* 6px */
  m-2	margin: 0.5rem; /* 8px */
  mx-2	margin-left: 0.5rem; /* 8px */
  margin-right: 0.5rem; /* 8px */
  my-2	margin-top: 0.5rem; /* 8px */
  margin-bottom: 0.5rem; /* 8px */
  mt-2	margin-top: 0.5rem; /* 8px */
  mr-2	margin-right: 0.5rem; /* 8px */
  mb-2	margin-bottom: 0.5rem; /* 8px */
  ml-2	margin-left: 0.5rem; /* 8px */
  m-2.5	margin: 0.625rem; /* 10px */
  mx-2.5	margin-left: 0.625rem; /* 10px */
  margin-right: 0.625rem; /* 10px */
  my-2.5	margin-top: 0.625rem; /* 10px */
  margin-bottom: 0.625rem; /* 10px */
  mt-2.5	margin-top: 0.625rem; /* 10px */
  mr-2.5	margin-right: 0.625rem; /* 10px */
  mb-2.5	margin-bottom: 0.625rem; /* 10px */
  ml-2.5	margin-left: 0.625rem; /* 10px */
  m-3	margin: 0.75rem; /* 12px */
  mx-3	margin-left: 0.75rem; /* 12px */
  margin-right: 0.75rem; /* 12px */
  my-3	margin-top: 0.75rem; /* 12px */
  margin-bottom: 0.75rem; /* 12px */
  mt-3	margin-top: 0.75rem; /* 12px */
  mr-3	margin-right: 0.75rem; /* 12px */
  mb-3	margin-bottom: 0.75rem; /* 12px */
  ml-3	margin-left: 0.75rem; /* 12px */
  m-3.5	margin: 0.875rem; /* 14px */
  mx-3.5	margin-left: 0.875rem; /* 14px */
  margin-right: 0.875rem; /* 14px */
  my-3.5	margin-top: 0.875rem; /* 14px */
  margin-bottom: 0.875rem; /* 14px */
  mt-3.5	margin-top: 0.875rem; /* 14px */
  mr-3.5	margin-right: 0.875rem; /* 14px */
  mb-3.5	margin-bottom: 0.875rem; /* 14px */
  ml-3.5	margin-left: 0.875rem; /* 14px */
  m-4	margin: 1rem; /* 16px */
  mx-4	margin-left: 1rem; /* 16px */
  margin-right: 1rem; /* 16px */
  my-4	margin-top: 1rem; /* 16px */
  margin-bottom: 1rem; /* 16px */
  mt-4	margin-top: 1rem; /* 16px */
  mr-4	margin-right: 1rem; /* 16px */
  mb-4	margin-bottom: 1rem; /* 16px */
  ml-4	margin-left: 1rem; /* 16px */
  m-5	margin: 1.25rem; /* 20px */
  mx-5	margin-left: 1.25rem; /* 20px */
  margin-right: 1.25rem; /* 20px */
  my-5	margin-top: 1.25rem; /* 20px */
  margin-bottom: 1.25rem; /* 20px */
  mt-5	margin-top: 1.25rem; /* 20px */
  mr-5	margin-right: 1.25rem; /* 20px */
  mb-5	margin-bottom: 1.25rem; /* 20px */
  ml-5	margin-left: 1.25rem; /* 20px */
  m-6	margin: 1.5rem; /* 24px */
  mx-6	margin-left: 1.5rem; /* 24px */
  margin-right: 1.5rem; /* 24px */
  my-6	margin-top: 1.5rem; /* 24px */
  margin-bottom: 1.5rem; /* 24px */
  mt-6	margin-top: 1.5rem; /* 24px */
  mr-6	margin-right: 1.5rem; /* 24px */
  mb-6	margin-bottom: 1.5rem; /* 24px */
  ml-6	margin-left: 1.5rem; /* 24px */
  m-7	margin: 1.75rem; /* 28px */
  mx-7	margin-left: 1.75rem; /* 28px */
  margin-right: 1.75rem; /* 28px */
  my-7	margin-top: 1.75rem; /* 28px */
  margin-bottom: 1.75rem; /* 28px */
  mt-7	margin-top: 1.75rem; /* 28px */
  mr-7	margin-right: 1.75rem; /* 28px */
  mb-7	margin-bottom: 1.75rem; /* 28px */
  ml-7	margin-left: 1.75rem; /* 28px */
  m-8	margin: 2rem; /* 32px */
  mx-8	margin-left: 2rem; /* 32px */
  margin-right: 2rem; /* 32px */
  my-8	margin-top: 2rem; /* 32px */
  margin-bottom: 2rem; /* 32px */
  mt-8	margin-top: 2rem; /* 32px */
  mr-8	margin-right: 2rem; /* 32px */
  mb-8	margin-bottom: 2rem; /* 32px */
  ml-8	margin-left: 2rem; /* 32px */
  m-9	margin: 2.25rem; /* 36px */
  mx-9	margin-left: 2.25rem; /* 36px */
  margin-right: 2.25rem; /* 36px */
  my-9	margin-top: 2.25rem; /* 36px */
  margin-bottom: 2.25rem; /* 36px */
  mt-9	margin-top: 2.25rem; /* 36px */
  mr-9	margin-right: 2.25rem; /* 36px */
  mb-9	margin-bottom: 2.25rem; /* 36px */
  ml-9	margin-left: 2.25rem; /* 36px */
  m-10	margin: 2.5rem; /* 40px */
  mx-10	margin-left: 2.5rem; /* 40px */
  margin-right: 2.5rem; /* 40px */
  my-10	margin-top: 2.5rem; /* 40px */
  margin-bottom: 2.5rem; /* 40px */
  mt-10	margin-top: 2.5rem; /* 40px */
  mr-10	margin-right: 2.5rem; /* 40px */
  mb-10	margin-bottom: 2.5rem; /* 40px */
  ml-10	margin-left: 2.5rem; /* 40px */
  m-11	margin: 2.75rem; /* 44px */
  mx-11	margin-left: 2.75rem; /* 44px */
  margin-right: 2.75rem; /* 44px */
  my-11	margin-top: 2.75rem; /* 44px */
  margin-bottom: 2.75rem; /* 44px */
  mt-11	margin-top: 2.75rem; /* 44px */
  mr-11	margin-right: 2.75rem; /* 44px */
  mb-11	margin-bottom: 2.75rem; /* 44px */
  ml-11	margin-left: 2.75rem; /* 44px */
  m-12	margin: 3rem; /* 48px */
  mx-12	margin-left: 3rem; /* 48px */
  margin-right: 3rem; /* 48px */
  my-12	margin-top: 3rem; /* 48px */
  margin-bottom: 3rem; /* 48px */
  mt-12	margin-top: 3rem; /* 48px */
  mr-12	margin-right: 3rem; /* 48px */
  mb-12	margin-bottom: 3rem; /* 48px */
  ml-12	margin-left: 3rem; /* 48px */
  m-14	margin: 3.5rem; /* 56px */
  mx-14	margin-left: 3.5rem; /* 56px */
  margin-right: 3.5rem; /* 56px */
  my-14	margin-top: 3.5rem; /* 56px */
  margin-bottom: 3.5rem; /* 56px */
  mt-14	margin-top: 3.5rem; /* 56px */
  mr-14	margin-right: 3.5rem; /* 56px */
  mb-14	margin-bottom: 3.5rem; /* 56px */
  ml-14	margin-left: 3.5rem; /* 56px */
  m-16	margin: 4rem; /* 64px */
  mx-16	margin-left: 4rem; /* 64px */
  margin-right: 4rem; /* 64px */
  my-16	margin-top: 4rem; /* 64px */
  margin-bottom: 4rem; /* 64px */
  mt-16	margin-top: 4rem; /* 64px */
  mr-16	margin-right: 4rem; /* 64px */
  mb-16	margin-bottom: 4rem; /* 64px */
  ml-16	margin-left: 4rem; /* 64px */
  m-20	margin: 5rem; /* 80px */
  mx-20	margin-left: 5rem; /* 80px */
  margin-right: 5rem; /* 80px */
  my-20	margin-top: 5rem; /* 80px */
  margin-bottom: 5rem; /* 80px */
  mt-20	margin-top: 5rem; /* 80px */
  mr-20	margin-right: 5rem; /* 80px */
  mb-20	margin-bottom: 5rem; /* 80px */
  ml-20	margin-left: 5rem; /* 80px */
  m-24	margin: 6rem; /* 96px */
  mx-24	margin-left: 6rem; /* 96px */
  margin-right: 6rem; /* 96px */
  my-24	margin-top: 6rem; /* 96px */
  margin-bottom: 6rem; /* 96px */
  mt-24	margin-top: 6rem; /* 96px */
  mr-24	margin-right: 6rem; /* 96px */
  mb-24	margin-bottom: 6rem; /* 96px */
  ml-24	margin-left: 6rem; /* 96px */
  m-28	margin: 7rem; /* 112px */
  mx-28	margin-left: 7rem; /* 112px */
  margin-right: 7rem; /* 112px */
  my-28	margin-top: 7rem; /* 112px */
  margin-bottom: 7rem; /* 112px */
  mt-28	margin-top: 7rem; /* 112px */
  mr-28	margin-right: 7rem; /* 112px */
  mb-28	margin-bottom: 7rem; /* 112px */
  ml-28	margin-left: 7rem; /* 112px */
  m-32	margin: 8rem; /* 128px */
  mx-32	margin-left: 8rem; /* 128px */
  margin-right: 8rem; /* 128px */
  my-32	margin-top: 8rem; /* 128px */
  margin-bottom: 8rem; /* 128px */
  mt-32	margin-top: 8rem; /* 128px */
  mr-32	margin-right: 8rem; /* 128px */
  mb-32	margin-bottom: 8rem; /* 128px */
  ml-32	margin-left: 8rem; /* 128px */
  m-36	margin: 9rem; /* 144px */
  mx-36	margin-left: 9rem; /* 144px */
  margin-right: 9rem; /* 144px */
  my-36	margin-top: 9rem; /* 144px */
  margin-bottom: 9rem; /* 144px */
  mt-36	margin-top: 9rem; /* 144px */
  mr-36	margin-right: 9rem; /* 144px */
  mb-36	margin-bottom: 9rem; /* 144px */
  ml-36	margin-left: 9rem; /* 144px */
  m-40	margin: 10rem; /* 160px */
  mx-40	margin-left: 10rem; /* 160px */
  margin-right: 10rem; /* 160px */
  my-40	margin-top: 10rem; /* 160px */
  margin-bottom: 10rem; /* 160px */
  mt-40	margin-top: 10rem; /* 160px */
  mr-40	margin-right: 10rem; /* 160px */
  mb-40	margin-bottom: 10rem; /* 160px */
  ml-40	margin-left: 10rem; /* 160px */
  m-44	margin: 11rem; /* 176px */
  mx-44	margin-left: 11rem; /* 176px */
  margin-right: 11rem; /* 176px */
  my-44	margin-top: 11rem; /* 176px */
  margin-bottom: 11rem; /* 176px */
  mt-44	margin-top: 11rem; /* 176px */
  mr-44	margin-right: 11rem; /* 176px */
  mb-44	margin-bottom: 11rem; /* 176px */
  ml-44	margin-left: 11rem; /* 176px */
  m-48	margin: 12rem; /* 192px */
  mx-48	margin-left: 12rem; /* 192px */
  margin-right: 12rem; /* 192px */
  my-48	margin-top: 12rem; /* 192px */
  margin-bottom: 12rem; /* 192px */
  mt-48	margin-top: 12rem; /* 192px */
  mr-48	margin-right: 12rem; /* 192px */
  mb-48	margin-bottom: 12rem; /* 192px */
  ml-48	margin-left: 12rem; /* 192px */
  m-52	margin: 13rem; /* 208px */
  mx-52	margin-left: 13rem; /* 208px */
  margin-right: 13rem; /* 208px */
  my-52	margin-top: 13rem; /* 208px */
  margin-bottom: 13rem; /* 208px */
  mt-52	margin-top: 13rem; /* 208px */
  mr-52	margin-right: 13rem; /* 208px */
  mb-52	margin-bottom: 13rem; /* 208px */
  ml-52	margin-left: 13rem; /* 208px */
  m-56	margin: 14rem; /* 224px */
  mx-56	margin-left: 14rem; /* 224px */
  margin-right: 14rem; /* 224px */
  my-56	margin-top: 14rem; /* 224px */
  margin-bottom: 14rem; /* 224px */
  mt-56	margin-top: 14rem; /* 224px */
  mr-56	margin-right: 14rem; /* 224px */
  mb-56	margin-bottom: 14rem; /* 224px */
  ml-56	margin-left: 14rem; /* 224px */
  m-60	margin: 15rem; /* 240px */
  mx-60	margin-left: 15rem; /* 240px */
  margin-right: 15rem; /* 240px */
  my-60	margin-top: 15rem; /* 240px */
  margin-bottom: 15rem; /* 240px */
  mt-60	margin-top: 15rem; /* 240px */
  mr-60	margin-right: 15rem; /* 240px */
  mb-60	margin-bottom: 15rem; /* 240px */
  ml-60	margin-left: 15rem; /* 240px */
  m-64	margin: 16rem; /* 256px */
  mx-64	margin-left: 16rem; /* 256px */
  margin-right: 16rem; /* 256px */
  my-64	margin-top: 16rem; /* 256px */
  margin-bottom: 16rem; /* 256px */
  mt-64	margin-top: 16rem; /* 256px */
  mr-64	margin-right: 16rem; /* 256px */
  mb-64	margin-bottom: 16rem; /* 256px */
  ml-64	margin-left: 16rem; /* 256px */
  m-72	margin: 18rem; /* 288px */
  mx-72	margin-left: 18rem; /* 288px */
  margin-right: 18rem; /* 288px */
  my-72	margin-top: 18rem; /* 288px */
  margin-bottom: 18rem; /* 288px */
  mt-72	margin-top: 18rem; /* 288px */
  mr-72	margin-right: 18rem; /* 288px */
  mb-72	margin-bottom: 18rem; /* 288px */
  ml-72	margin-left: 18rem; /* 288px */
  m-80	margin: 20rem; /* 320px */
  mx-80	margin-left: 20rem; /* 320px */
  margin-right: 20rem; /* 320px */
  my-80	margin-top: 20rem; /* 320px */
  margin-bottom: 20rem; /* 320px */
  mt-80	margin-top: 20rem; /* 320px */
  mr-80	margin-right: 20rem; /* 320px */
  mb-80	margin-bottom: 20rem; /* 320px */
  ml-80	margin-left: 20rem; /* 320px */
  m-96	margin: 24rem; /* 384px */
  mx-96	margin-left: 24rem; /* 384px */
  margin-right: 24rem; /* 384px */
  my-96	margin-top: 24rem; /* 384px */
  margin-bottom: 24rem; /* 384px */
  mt-96	margin-top: 24rem; /* 384px */
  mr-96	margin-right: 24rem; /* 384px */
  mb-96	margin-bottom: 24rem; /* 384px */
  ml-96	margin-left: 24rem; /* 384px */
  m-auto	margin: auto;
  mx-auto	margin-left: auto;
  margin-right: auto;
  my-auto	margin-top: auto;
  margin-bottom: auto;
  mt-auto	margin-top: auto;
  mr-auto	margin-right: auto;
  mb-auto	margin-bottom: auto;
  ml-auto	margin-left: auto;
-->

<!-- Padding Values
  p-0	padding: 0px;
  px-0	padding-left: 0px;
  padding-right: 0px;
  py-0	padding-top: 0px;
  padding-bottom: 0px;
  pt-0	padding-top: 0px;
  pr-0	padding-right: 0px;
  pb-0	padding-bottom: 0px;
  pl-0	padding-left: 0px;
  p-px	padding: 1px;
  px-px	padding-left: 1px;
  padding-right: 1px;
  py-px	padding-top: 1px;
  padding-bottom: 1px;
  pt-px	padding-top: 1px;
  pr-px	padding-right: 1px;
  pb-px	padding-bottom: 1px;
  pl-px	padding-left: 1px;
  p-0.5	padding: 0.125rem; /* 2px */
  px-0.5	padding-left: 0.125rem; /* 2px */
  padding-right: 0.125rem; /* 2px */
  py-0.5	padding-top: 0.125rem; /* 2px */
  padding-bottom: 0.125rem; /* 2px */
  pt-0.5	padding-top: 0.125rem; /* 2px */
  pr-0.5	padding-right: 0.125rem; /* 2px */
  pb-0.5	padding-bottom: 0.125rem; /* 2px */
  pl-0.5	padding-left: 0.125rem; /* 2px */
  p-1	padding: 0.25rem; /* 4px */
  px-1	padding-left: 0.25rem; /* 4px */
  padding-right: 0.25rem; /* 4px */
  py-1	padding-top: 0.25rem; /* 4px */
  padding-bottom: 0.25rem; /* 4px */
  pt-1	padding-top: 0.25rem; /* 4px */
  pr-1	padding-right: 0.25rem; /* 4px */
  pb-1	padding-bottom: 0.25rem; /* 4px */
  pl-1	padding-left: 0.25rem; /* 4px */
  p-1.5	padding: 0.375rem; /* 6px */
  px-1.5	padding-left: 0.375rem; /* 6px */
  padding-right: 0.375rem; /* 6px */
  py-1.5	padding-top: 0.375rem; /* 6px */
  padding-bottom: 0.375rem; /* 6px */
  pt-1.5	padding-top: 0.375rem; /* 6px */
  pr-1.5	padding-right: 0.375rem; /* 6px */
  pb-1.5	padding-bottom: 0.375rem; /* 6px */
  pl-1.5	padding-left: 0.375rem; /* 6px */
  p-2	padding: 0.5rem; /* 8px */
  px-2	padding-left: 0.5rem; /* 8px */
  padding-right: 0.5rem; /* 8px */
  py-2	padding-top: 0.5rem; /* 8px */
  padding-bottom: 0.5rem; /* 8px */
  pt-2	padding-top: 0.5rem; /* 8px */
  pr-2	padding-right: 0.5rem; /* 8px */
  pb-2	padding-bottom: 0.5rem; /* 8px */
  pl-2	padding-left: 0.5rem; /* 8px */
  p-2.5	padding: 0.625rem; /* 10px */
  px-2.5	padding-left: 0.625rem; /* 10px */
  padding-right: 0.625rem; /* 10px */
  py-2.5	padding-top: 0.625rem; /* 10px */
  padding-bottom: 0.625rem; /* 10px */
  pt-2.5	padding-top: 0.625rem; /* 10px */
  pr-2.5	padding-right: 0.625rem; /* 10px */
  pb-2.5	padding-bottom: 0.625rem; /* 10px */
  pl-2.5	padding-left: 0.625rem; /* 10px */
  p-3	padding: 0.75rem; /* 12px */
  px-3	padding-left: 0.75rem; /* 12px */
  padding-right: 0.75rem; /* 12px */
  py-3	padding-top: 0.75rem; /* 12px */
  padding-bottom: 0.75rem; /* 12px */
  pt-3	padding-top: 0.75rem; /* 12px */
  pr-3	padding-right: 0.75rem; /* 12px */
  pb-3	padding-bottom: 0.75rem; /* 12px */
  pl-3	padding-left: 0.75rem; /* 12px */
  p-3.5	padding: 0.875rem; /* 14px */
  px-3.5	padding-left: 0.875rem; /* 14px */
  padding-right: 0.875rem; /* 14px */
  py-3.5	padding-top: 0.875rem; /* 14px */
  padding-bottom: 0.875rem; /* 14px */
  pt-3.5	padding-top: 0.875rem; /* 14px */
  pr-3.5	padding-right: 0.875rem; /* 14px */
  pb-3.5	padding-bottom: 0.875rem; /* 14px */
  pl-3.5	padding-left: 0.875rem; /* 14px */
  p-4	padding: 1rem; /* 16px */
  px-4	padding-left: 1rem; /* 16px */
  padding-right: 1rem; /* 16px */
  py-4	padding-top: 1rem; /* 16px */
  padding-bottom: 1rem; /* 16px */
  pt-4	padding-top: 1rem; /* 16px */
  pr-4	padding-right: 1rem; /* 16px */
  pb-4	padding-bottom: 1rem; /* 16px */
  pl-4	padding-left: 1rem; /* 16px */
  p-5	padding: 1.25rem; /* 20px */
  px-5	padding-left: 1.25rem; /* 20px */
  padding-right: 1.25rem; /* 20px */
  py-5	padding-top: 1.25rem; /* 20px */
  padding-bottom: 1.25rem; /* 20px */
  pt-5	padding-top: 1.25rem; /* 20px */
  pr-5	padding-right: 1.25rem; /* 20px */
  pb-5	padding-bottom: 1.25rem; /* 20px */
  pl-5	padding-left: 1.25rem; /* 20px */
  p-6	padding: 1.5rem; /* 24px */
  px-6	padding-left: 1.5rem; /* 24px */
  padding-right: 1.5rem; /* 24px */
  py-6	padding-top: 1.5rem; /* 24px */
  padding-bottom: 1.5rem; /* 24px */
  pt-6	padding-top: 1.5rem; /* 24px */
  pr-6	padding-right: 1.5rem; /* 24px */
  pb-6	padding-bottom: 1.5rem; /* 24px */
  pl-6	padding-left: 1.5rem; /* 24px */
  p-7	padding: 1.75rem; /* 28px */
  px-7	padding-left: 1.75rem; /* 28px */
  padding-right: 1.75rem; /* 28px */
  py-7	padding-top: 1.75rem; /* 28px */
  padding-bottom: 1.75rem; /* 28px */
  pt-7	padding-top: 1.75rem; /* 28px */
  pr-7	padding-right: 1.75rem; /* 28px */
  pb-7	padding-bottom: 1.75rem; /* 28px */
  pl-7	padding-left: 1.75rem; /* 28px */
  p-8	padding: 2rem; /* 32px */
  px-8	padding-left: 2rem; /* 32px */
  padding-right: 2rem; /* 32px */
  py-8	padding-top: 2rem; /* 32px */
  padding-bottom: 2rem; /* 32px */
  pt-8	padding-top: 2rem; /* 32px */
  pr-8	padding-right: 2rem; /* 32px */
  pb-8	padding-bottom: 2rem; /* 32px */
  pl-8	padding-left: 2rem; /* 32px */
  p-9	padding: 2.25rem; /* 36px */
  px-9	padding-left: 2.25rem; /* 36px */
  padding-right: 2.25rem; /* 36px */
  py-9	padding-top: 2.25rem; /* 36px */
  padding-bottom: 2.25rem; /* 36px */
  pt-9	padding-top: 2.25rem; /* 36px */
  pr-9	padding-right: 2.25rem; /* 36px */
  pb-9	padding-bottom: 2.25rem; /* 36px */
  pl-9	padding-left: 2.25rem; /* 36px */
  p-10	padding: 2.5rem; /* 40px */
  px-10	padding-left: 2.5rem; /* 40px */
  padding-right: 2.5rem; /* 40px */
  py-10	padding-top: 2.5rem; /* 40px */
  padding-bottom: 2.5rem; /* 40px */
  pt-10	padding-top: 2.5rem; /* 40px */
  pr-10	padding-right: 2.5rem; /* 40px */
  pb-10	padding-bottom: 2.5rem; /* 40px */
  pl-10	padding-left: 2.5rem; /* 40px */
  p-11	padding: 2.75rem; /* 44px */
  px-11	padding-left: 2.75rem; /* 44px */
  padding-right: 2.75rem; /* 44px */
  py-11	padding-top: 2.75rem; /* 44px */
  padding-bottom: 2.75rem; /* 44px */
  pt-11	padding-top: 2.75rem; /* 44px */
  pr-11	padding-right: 2.75rem; /* 44px */
  pb-11	padding-bottom: 2.75rem; /* 44px */
  pl-11	padding-left: 2.75rem; /* 44px */
  p-12	padding: 3rem; /* 48px */
  px-12	padding-left: 3rem; /* 48px */
  padding-right: 3rem; /* 48px */
  py-12	padding-top: 3rem; /* 48px */
  padding-bottom: 3rem; /* 48px */
  pt-12	padding-top: 3rem; /* 48px */
  pr-12	padding-right: 3rem; /* 48px */
  pb-12	padding-bottom: 3rem; /* 48px */
  pl-12	padding-left: 3rem; /* 48px */
  p-14	padding: 3.5rem; /* 56px */
  px-14	padding-left: 3.5rem; /* 56px */
  padding-right: 3.5rem; /* 56px */
  py-14	padding-top: 3.5rem; /* 56px */
  padding-bottom: 3.5rem; /* 56px */
  pt-14	padding-top: 3.5rem; /* 56px */
  pr-14	padding-right: 3.5rem; /* 56px */
  pb-14	padding-bottom: 3.5rem; /* 56px */
  pl-14	padding-left: 3.5rem; /* 56px */
  p-16	padding: 4rem; /* 64px */
  px-16	padding-left: 4rem; /* 64px */
  padding-right: 4rem; /* 64px */
  py-16	padding-top: 4rem; /* 64px */
  padding-bottom: 4rem; /* 64px */
  pt-16	padding-top: 4rem; /* 64px */
  pr-16	padding-right: 4rem; /* 64px */
  pb-16	padding-bottom: 4rem; /* 64px */
  pl-16	padding-left: 4rem; /* 64px */
  p-20	padding: 5rem; /* 80px */
  px-20	padding-left: 5rem; /* 80px */
  padding-right: 5rem; /* 80px */
  py-20	padding-top: 5rem; /* 80px */
  padding-bottom: 5rem; /* 80px */
  pt-20	padding-top: 5rem; /* 80px */
  pr-20	padding-right: 5rem; /* 80px */
  pb-20	padding-bottom: 5rem; /* 80px */
  pl-20	padding-left: 5rem; /* 80px */
  p-24	padding: 6rem; /* 96px */
  px-24	padding-left: 6rem; /* 96px */
  padding-right: 6rem; /* 96px */
  py-24	padding-top: 6rem; /* 96px */
  padding-bottom: 6rem; /* 96px */
  pt-24	padding-top: 6rem; /* 96px */
  pr-24	padding-right: 6rem; /* 96px */
  pb-24	padding-bottom: 6rem; /* 96px */
  pl-24	padding-left: 6rem; /* 96px */
  p-28	padding: 7rem; /* 112px */
  px-28	padding-left: 7rem; /* 112px */
  padding-right: 7rem; /* 112px */
  py-28	padding-top: 7rem; /* 112px */
  padding-bottom: 7rem; /* 112px */
  pt-28	padding-top: 7rem; /* 112px */
  pr-28	padding-right: 7rem; /* 112px */
  pb-28	padding-bottom: 7rem; /* 112px */
  pl-28	padding-left: 7rem; /* 112px */
  p-32	padding: 8rem; /* 128px */
  px-32	padding-left: 8rem; /* 128px */
  padding-right: 8rem; /* 128px */
  py-32	padding-top: 8rem; /* 128px */
  padding-bottom: 8rem; /* 128px */
  pt-32	padding-top: 8rem; /* 128px */
  pr-32	padding-right: 8rem; /* 128px */
  pb-32	padding-bottom: 8rem; /* 128px */
  pl-32	padding-left: 8rem; /* 128px */
  p-36	padding: 9rem; /* 144px */
  px-36	padding-left: 9rem; /* 144px */
  padding-right: 9rem; /* 144px */
  py-36	padding-top: 9rem; /* 144px */
  padding-bottom: 9rem; /* 144px */
  pt-36	padding-top: 9rem; /* 144px */
  pr-36	padding-right: 9rem; /* 144px */
  pb-36	padding-bottom: 9rem; /* 144px */
  pl-36	padding-left: 9rem; /* 144px */
  p-40	padding: 10rem; /* 160px */
  px-40	padding-left: 10rem; /* 160px */
  padding-right: 10rem; /* 160px */
  py-40	padding-top: 10rem; /* 160px */
  padding-bottom: 10rem; /* 160px */
  pt-40	padding-top: 10rem; /* 160px */
  pr-40	padding-right: 10rem; /* 160px */
  pb-40	padding-bottom: 10rem; /* 160px */
  pl-40	padding-left: 10rem; /* 160px */
  p-44	padding: 11rem; /* 176px */
  px-44	padding-left: 11rem; /* 176px */
  padding-right: 11rem; /* 176px */
  py-44	padding-top: 11rem; /* 176px */
  padding-bottom: 11rem; /* 176px */
  pt-44	padding-top: 11rem; /* 176px */
  pr-44	padding-right: 11rem; /* 176px */
  pb-44	padding-bottom: 11rem; /* 176px */
  pl-44	padding-left: 11rem; /* 176px */
  p-48	padding: 12rem; /* 192px */
  px-48	padding-left: 12rem; /* 192px */
  padding-right: 12rem; /* 192px */
  py-48	padding-top: 12rem; /* 192px */
  padding-bottom: 12rem; /* 192px */
  pt-48	padding-top: 12rem; /* 192px */
  pr-48	padding-right: 12rem; /* 192px */
  pb-48	padding-bottom: 12rem; /* 192px */
  pl-48	padding-left: 12rem; /* 192px */
  p-52	padding: 13rem; /* 208px */
  px-52	padding-left: 13rem; /* 208px */
  padding-right: 13rem; /* 208px */
  py-52	padding-top: 13rem; /* 208px */
  padding-bottom: 13rem; /* 208px */
  pt-52	padding-top: 13rem; /* 208px */
  pr-52	padding-right: 13rem; /* 208px */
  pb-52	padding-bottom: 13rem; /* 208px */
  pl-52	padding-left: 13rem; /* 208px */
  p-56	padding: 14rem; /* 224px */
  px-56	padding-left: 14rem; /* 224px */
  padding-right: 14rem; /* 224px */
  py-56	padding-top: 14rem; /* 224px */
  padding-bottom: 14rem; /* 224px */
  pt-56	padding-top: 14rem; /* 224px */
  pr-56	padding-right: 14rem; /* 224px */
  pb-56	padding-bottom: 14rem; /* 224px */
  pl-56	padding-left: 14rem; /* 224px */
  p-60	padding: 15rem; /* 240px */
  px-60	padding-left: 15rem; /* 240px */
  padding-right: 15rem; /* 240px */
  py-60	padding-top: 15rem; /* 240px */
  padding-bottom: 15rem; /* 240px */
  pt-60	padding-top: 15rem; /* 240px */
  pr-60	padding-right: 15rem; /* 240px */
  pb-60	padding-bottom: 15rem; /* 240px */
  pl-60	padding-left: 15rem; /* 240px */
  p-64	padding: 16rem; /* 256px */
  px-64	padding-left: 16rem; /* 256px */
  padding-right: 16rem; /* 256px */
  py-64	padding-top: 16rem; /* 256px */
  padding-bottom: 16rem; /* 256px */
  pt-64	padding-top: 16rem; /* 256px */
  pr-64	padding-right: 16rem; /* 256px */
  pb-64	padding-bottom: 16rem; /* 256px */
  pl-64	padding-left: 16rem; /* 256px */
  p-72	padding: 18rem; /* 288px */
  px-72	padding-left: 18rem; /* 288px */
  padding-right: 18rem; /* 288px */
  py-72	padding-top: 18rem; /* 288px */
  padding-bottom: 18rem; /* 288px */
  pt-72	padding-top: 18rem; /* 288px */
  pr-72	padding-right: 18rem; /* 288px */
  pb-72	padding-bottom: 18rem; /* 288px */
  pl-72	padding-left: 18rem; /* 288px */
  p-80	padding: 20rem; /* 320px */
  px-80	padding-left: 20rem; /* 320px */
  padding-right: 20rem; /* 320px */
  py-80	padding-top: 20rem; /* 320px */
  padding-bottom: 20rem; /* 320px */
  pt-80	padding-top: 20rem; /* 320px */
  pr-80	padding-right: 20rem; /* 320px */
  pb-80	padding-bottom: 20rem; /* 320px */
  pl-80	padding-left: 20rem; /* 320px */
  p-96	padding: 24rem; /* 384px */
  px-96	padding-left: 24rem; /* 384px */
  padding-right: 24rem; /* 384px */
  py-96	padding-top: 24rem; /* 384px */
  padding-bottom: 24rem; /* 384px */
  pt-96	padding-top: 24rem; /* 384px */
  pr-96	padding-right: 24rem; /* 384px */
  pb-96	padding-bottom: 24rem; /* 384px */
  pl-96	padding-left: 24rem; /* 384px */
-->

<!-- Space Between X/Y
  space-x-0 > * + *	margin-left: 0px;
  space-y-0 > * + *	margin-top: 0px;
  space-x-0.5 > * + *	margin-left: 0.125rem; /* 2px */
  space-y-0.5 > * + *	margin-top: 0.125rem; /* 2px */
  space-x-1 > * + *	margin-left: 0.25rem; /* 4px */
  space-y-1 > * + *	margin-top: 0.25rem; /* 4px */
  space-x-1.5 > * + *	margin-left: 0.375rem; /* 6px */
  space-y-1.5 > * + *	margin-top: 0.375rem; /* 6px */
  space-x-2 > * + *	margin-left: 0.5rem; /* 8px */
  space-y-2 > * + *	margin-top: 0.5rem; /* 8px */
  space-x-2.5 > * + *	margin-left: 0.625rem; /* 10px */
  space-y-2.5 > * + *	margin-top: 0.625rem; /* 10px */
  space-x-3 > * + *	margin-left: 0.75rem; /* 12px */
  space-y-3 > * + *	margin-top: 0.75rem; /* 12px */
  space-x-3.5 > * + *	margin-left: 0.875rem; /* 14px */
  space-y-3.5 > * + *	margin-top: 0.875rem; /* 14px */
  space-x-4 > * + *	margin-left: 1rem; /* 16px */
  space-y-4 > * + *	margin-top: 1rem; /* 16px */
  space-x-5 > * + *	margin-left: 1.25rem; /* 20px */
  space-y-5 > * + *	margin-top: 1.25rem; /* 20px */
  space-x-6 > * + *	margin-left: 1.5rem; /* 24px */
  space-y-6 > * + *	margin-top: 1.5rem; /* 24px */
  space-x-7 > * + *	margin-left: 1.75rem; /* 28px */
  space-y-7 > * + *	margin-top: 1.75rem; /* 28px */
  space-x-8 > * + *	margin-left: 2rem; /* 32px */
  space-y-8 > * + *	margin-top: 2rem; /* 32px */
  space-x-9 > * + *	margin-left: 2.25rem; /* 36px */
  space-y-9 > * + *	margin-top: 2.25rem; /* 36px */
  space-x-10 > * + *	margin-left: 2.5rem; /* 40px */
  space-y-10 > * + *	margin-top: 2.5rem; /* 40px */
  space-x-11 > * + *	margin-left: 2.75rem; /* 44px */
  space-y-11 > * + *	margin-top: 2.75rem; /* 44px */
  space-x-12 > * + *	margin-left: 3rem; /* 48px */
  space-y-12 > * + *	margin-top: 3rem; /* 48px */
  space-x-14 > * + *	margin-left: 3.5rem; /* 56px */
  space-y-14 > * + *	margin-top: 3.5rem; /* 56px */
  space-x-16 > * + *	margin-left: 4rem; /* 64px */
  space-y-16 > * + *	margin-top: 4rem; /* 64px */
  space-x-20 > * + *	margin-left: 5rem; /* 80px */
  space-y-20 > * + *	margin-top: 5rem; /* 80px */
  space-x-24 > * + *	margin-left: 6rem; /* 96px */
  space-y-24 > * + *	margin-top: 6rem; /* 96px */
  space-x-28 > * + *	margin-left: 7rem; /* 112px */
  space-y-28 > * + *	margin-top: 7rem; /* 112px */
  space-x-32 > * + *	margin-left: 8rem; /* 128px */
  space-y-32 > * + *	margin-top: 8rem; /* 128px */
  space-x-36 > * + *	margin-left: 9rem; /* 144px */
  space-y-36 > * + *	margin-top: 9rem; /* 144px */
  space-x-40 > * + *	margin-left: 10rem; /* 160px */
  space-y-40 > * + *	margin-top: 10rem; /* 160px */
  space-x-44 > * + *	margin-left: 11rem; /* 176px */
  space-y-44 > * + *	margin-top: 11rem; /* 176px */
  space-x-48 > * + *	margin-left: 12rem; /* 192px */
  space-y-48 > * + *	margin-top: 12rem; /* 192px */
  space-x-52 > * + *	margin-left: 13rem; /* 208px */
  space-y-52 > * + *	margin-top: 13rem; /* 208px */
  space-x-56 > * + *	margin-left: 14rem; /* 224px */
  space-y-56 > * + *	margin-top: 14rem; /* 224px */
  space-x-60 > * + *	margin-left: 15rem; /* 240px */
  space-y-60 > * + *	margin-top: 15rem; /* 240px */
  space-x-64 > * + *	margin-left: 16rem; /* 256px */
  space-y-64 > * + *	margin-top: 16rem; /* 256px */
  space-x-72 > * + *	margin-left: 18rem; /* 288px */
  space-y-72 > * + *	margin-top: 18rem; /* 288px */
  space-x-80 > * + *	margin-left: 20rem; /* 320px */
  space-y-80 > * + *	margin-top: 20rem; /* 320px */
  space-x-96 > * + *	margin-left: 24rem; /* 384px */
  space-y-96 > * + *	margin-top: 24rem; /* 384px */
  space-x-px > * + *	margin-left: 1px;
  space-y-px > * + *	margin-top: 1px;
  space-y-reverse > * + *	--tw-space-y-reverse: 1;
  space-x-reverse > * + *	--tw-space-x-reverse: 1;
-->
```

## Typography

```xml
<!-- Font Family -->
<p class="font-sans">Tailwind is awesome</p>
<p class="font-serif">Tailwind is awesome</p>
<p class="font-mono">Tailwind is awesome</p>

<!-- Font Size -->
<p class="text-xs">Tailwind is awesome</p>
<p class="text-sm">Tailwind is awesome</p>
<p class="text-base">Tailwind is awesome</p>
<p class="text-lg">Tailwind is awesome</p>
<p class="text-xl">Tailwind is awesome</p>
<p class="text-2xl">Tailwind is awesome</p>
<p class="text-3xl">Tailwind is awesome</p>
<p class="text-4xl">Tailwind is awesome</p>
<p class="text-5xl">Tailwind is awesome</p>
<p class="text-6xl">Tailwind is awesome</p>
<p class="text-7xl">Tailwind is awesome</p>
<p class="text-8xl">Tailwind is awesome</p>
<p class="text-9xl">Tailwind is awesome</p>

<!-- Font Weight -->
<p class="font-light">Tailwind is awesome</p>
<p class="font-normal">Tailwind is awesome</p>
<p class="font-medium">Tailwind is awesome</p>
<p class="font-semibold">Tailwind is awesome</p>
<p class="font-bold">Tailwind is awesome</p>

<!-- Letter Spacing -->
<p class="tracking-tight">Tailwind is awesome</p>
<p class="tracking-normal">Tailwind is awesome</p>
<p class="tracking-wide">Tailwind is awesome</p>

<!-- Text Alignment -->
<p class="text-left">Tailwind is awesome</p>
<p class="text-center">Tailwind is awesome</p>
<p class="text-right">Tailwind is awesome</p>

<!-- Text Decoration -->
<p class="underline decoration-4">Tailwind is awesome</p>
<p class="line-through">Tailwind is awesome</p>
<p class="overline">Tailwind is awesome</p>
<p class="no-underline">Tailwind is awesome</p>

<!-- Decoration Style -->
<p class="underline decoration-solid">Tailwind is awesome</p>
<p class="underline decoration-double">Tailwind is awesome</p>
<p class="underline decoration-dotted">Tailwind is awesome</p>
<p class="underline decoration-dashed">Tailwind is awesome</p>
<p class="underline decoration-wavy">Tailwind is awesome</p>

<!-- Decoration Offset -->
<p class="underline underline-offset-1">Tailwind is awesome</p>
<p class="underline underline-offset-2">Tailwind is awesome</p>
<p class="underline underline-offset-4">Tailwind is awesome</p>
<p class="underline underline-offset-8">Tailwind is awesome</p>

<!-- Text Transform -->
<p class="normal-case">Tailwind is awesome</p>
<p class="uppercase">Tailwind is awesome</p>
<p class="lowercase">Tailwind is awesome</p>
<p class="capitalize">Tailwind is awesome</p>

<!-- Font Family
  font-sans
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";

  font-serif
  font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;

  font-mono
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
-->

<!--
  Font Size
  text-xs	    font-size: 0.75rem; /* 12px */
  text-sm	    font-size: 0.875rem; /* 14px */
  text-base	  font-size: 1rem; /* 16px */
  text-lg	    font-size: 1.125rem; /* 18px */
  text-xl	    font-size: 1.25rem; /* 20px */
  text-2xl	  font-size: 1.5rem; /* 24px */
  text-3xl	  font-size: 1.875rem; /* 30px */
  text-4xl	  font-size: 2.25rem; /* 36px */
  text-5xl	  font-size: 3rem; /* 48px */
  text-6xl	  font-size: 3.75rem; /* 60px */
  text-7xl	  font-size: 4.5rem; /* 72px */
  text-8xl	  font-size: 6rem; /* 96px */
  text-9xl	  font-size: 8rem; /* 128px */
-->

<!-- Font Weight
  font-thin	      font-weight: 100;
  font-extralight	font-weight: 200;
  font-light	    font-weight: 300;
  font-normal	    font-weight: 400;
  font-medium	    font-weight: 500;
  font-semibold	  font-weight: 600;
  font-bold	      font-weight: 700;
  font-extrabold	font-weight: 800;
  font-black	    font-weight: 900;
-->

<!-- Letter Spacing
  tracking-tighter	letter-spacing: -0.05em;
  tracking-tight	  letter-spacing: -0.025em;
  tracking-normal	  letter-spacing: 0em;
  tracking-wide	    letter-spacing: 0.025em;
  tracking-wider	  letter-spacing: 0.05em;
  tracking-widest	  letter-spacing: 0.1em;
-->

<!-- Text Alignment
  text-left	    text-align: left;
  text-center	  text-align: center;
  text-right	  text-align: right;
  text-justify	text-align: justify;
 -->

<!-- Text Decoration
  decoration-auto	      text-decoration-thickness: auto;
  decoration-from-font	text-decoration-thickness: from-font;
  decoration-0	        text-decoration-thickness: 0px;
  decoration-1	        text-decoration-thickness: 1px;
  decoration-2	        text-decoration-thickness: 2px;
  decoration-4	        text-decoration-thickness: 4px;
  decoration-8	        text-decoration-thickness: 8px;
-->

<!-- Text Transform
  uppercase	  text-transform: uppercase;
  lowercase	  text-transform: lowercase;
  capitalize	text-transform: capitalize;
  normal-case	text-transform: none;
-->
```

## Sizing

```xml
<!-- Width -->
<div class="bg-black text-white my-2 w-0">w-0</div>
<div class="bg-black text-white my-2 w-1">w-1</div>
<div class="bg-black text-white my-2 w-1.5">w-1.5</div>
<div class="bg-black text-white my-2 w-2">w-2</div>
<div class="bg-black text-white my-2 w-3">w-3</div>
<div class="bg-black text-white my-2 w-5">w-5</div>
<div class="bg-black text-white my-2 w-6">w-6</div>
<div class="bg-black text-white my-2 w-7">w-7</div>
<div class="bg-black text-white my-2 w-8">w-8</div>
<div class="bg-black text-white my-2 w-9">w-9</div>
<div class="bg-black text-white my-2 w-10">w-10</div>
<div class="bg-black text-white my-2 w-11">w-11</div>
<div class="bg-black text-white my-2 w-12">w-12</div>
<!-- By 2 -->
<div class="bg-black text-white my-2 w-14">w-14</div>
<div class="bg-black text-white my-2 w-16">w-16</div>
<!-- By 4 -->
<div class="bg-black text-white my-2 w-20">w-20</div>
<div class="bg-black text-white my-2 w-24">w-24</div>
<div class="bg-black text-white my-2 w-28">w-28</div>
<div class="bg-black text-white my-2 w-32">w-32</div>
<div>...</div>
<div class="bg-black text-white my-2 w-36">w-36</div>
<!-- By 8 -->
<div class="bg-black text-white my-2 w-64">w-64</div>
<!-- By 16 -->
<div class="bg-black text-white my-2 w-80">w-80</div>
<div class="bg-black text-white my-2 w-96">w-96</div>

<div class="bg-black text-white my-2 w-auto">Auto</div>

<!-- Percentages -->
<div class="bg-green-500 text-white my-2 w-1/2">w-1/2</div>
<div class="bg-green-500 text-white my-2 w-1/3">w-1/3</div>
<div class="bg-green-500 text-white my-2 w-2/3">w-2/3</div>
<div class="bg-green-500 text-white my-2 w-1/4">w-1/4</div>
<div class="bg-green-500 text-white my-2 w-2/4">w-2/4</div>
<div class="bg-green-500 text-white my-2 w-3/4">w-3/4</div>
<div class="bg-green-500 text-white my-2 w-1/5">w-1/5</div>

<!-- Width of the viewport -->
<div class="bg-purple-500 text-white my-2 w-screen">w-screen</div>
<!-- 100% of container -->
<div class="bg-zinc-500 text-white my-2 w-full">w-full</div>
<!-- min/max content -->
<div class="bg-emerald-500 text-white my-2 w-min">w-min</div>
<div class="bg-emerald-500 text-white my-2 w-max">w-max</div>
<!-- Arbitrary Width -->
<div class="bg-red-500 text-white my-2 w-[300px]">300px</div>

<!-- Max Width -->
<div class="bg-gray-100 max-w-lg mx-auto">
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
  perferendis incidunt nihil ullam repellendus praesentium consectetur et
  sed distinctio, magni iusto quos repellat officiis cum dolore aliquid
  minus esse pariatur.
</div>

<!-- Height (Most of the same options as widths) -->
<div class="flex items-end">
  <div class="bg-orange-500 w-20 h-24">h-24</div>
  <div class="bg-orange-500 w-20 h-32">h-32</div>
  <div class="bg-orange-500 w-20 h-40">h-40</div>
  <div class="bg-orange-500 w-20 h-48">h-48</div>
  <div class="bg-orange-500 w-20 h-64">h-64</div>
  <div class="bg-orange-500 w-20 h-80">h-80</div>
</div>

<!-- Min Height -->
<div class="h-48 bg-red-200">
  <div class="h-24 bg-red-600 min-h-full">Tailwind is awesome</div>
</div>

<!-- Max Height -->
<div class="h-24 bg-orange-200">
  <div class="h-48 bg-orange-500 max-h-full">Tailwind is awesome</div>
</div>

<!-- Full screen height -->
<div class="h-screen bg-blue-300">Hello</div>

<!--
  Width Sizes
    w-0	    width: 0px;
    w-px	  width: 1px;
    w-0.5	  width: 0.125rem; /* 2px */
    w-1	    width: 0.25rem; /* 4px */
    w-1.5	  width: 0.375rem; /* 6px */
    w-2	    width: 0.5rem; /* 8px */
    w-2.5	  width: 0.625rem; /* 10px */
    w-3	    width: 0.75rem; /* 12px */
    w-3.5	  width: 0.875rem; /* 14px */
    w-4	    width: 1rem; /* 16px */
    w-5   	width: 1.25rem; /* 20px */
    w-6	    width: 1.5rem; /* 24px */
    w-7	    width: 1.75rem; /* 28px */
    w-8	    width: 2rem; /* 32px */
    w-9	    width: 2.25rem; /* 36px */
    w-10	  width: 2.5rem; /* 40px */
    w-11	  width: 2.75rem; /* 44px */
    w-12	  width: 3rem; /* 48px */
    w-14	  width: 3.5rem; /* 56px */
    w-16	  width: 4rem; /* 64px */
    w-20	  width: 5rem; /* 80px */
    w-24	  width: 6rem; /* 96px */
    w-28	  width: 7rem; /* 112px */
    w-32	  width: 8rem; /* 128px */
    w-36	  width: 9rem; /* 144px */
    w-40	  width: 10rem; /* 160px */
    w-44	  width: 11rem; /* 176px */
    w-48	  width: 12rem; /* 192px */
    w-52	  width: 13rem; /* 208px */
    w-56	  width: 14rem; /* 224px */
    w-60	  width: 15rem; /* 240px */
    w-64	  width: 16rem; /* 256px */
    w-72	  width: 18rem; /* 288px */
    w-80	  width: 20rem; /* 320px */
    w-96	  width: 24rem; /* 384px */
    w-auto	width: auto;
    w-1/2	  width: 50%;
    w-1/3	  width: 33.333333%;
    w-2/3	  width: 66.666667%;
    w-1/4	  width: 25%;
    w-2/4	  width: 50%;
    w-3/4	  width: 75%;
    w-1/5	  width: 20%;
    w-2/5	  width: 40%;
    w-3/5	  width: 60%;
    w-4/5	  width: 80%;
    w-1/6	  width: 16.666667%;
    w-2/6	  width: 33.333333%;
    w-3/6	  width: 50%;
    w-4/6	  width: 66.666667%;
    w-5/6	  width: 83.333333%;
    w-1/12	width: 8.333333%;
    w-2/12	width: 16.666667%;
    w-3/12	width: 25%;
    w-4/12	width: 33.333333%;
    w-5/12	width: 41.666667%;
    w-6/12	width: 50%;
    w-7/12	width: 58.333333%;
    w-8/12	width: 66.666667%;
    w-9/12	width: 75%;
    w-10/12	width: 83.333333%;
    w-11/12	width: 91.666667%;
    w-full	width: 100%;
    w-screen  width: 100vw;
    w-min	  width: min-content;
    w-max	  width: max-content;
    w-fit	  width: fit-content;
-->

<!--
  Min Width Sizes
    min-w-0	      min-width: 0px;
    min-w-full	  min-width: 100%;
    min-w-min	    min-width: min-content;
    min-w-max	    min-width: max-content;
    min-w-fit	    min-width: fit-content;
-->

<!--
  Max Width Sizes
    max-w-0	      max-width: 0rem; /* 0px */
    max-w-none	  max-width: none;
    max-w-xs	    max-width: 20rem; /* 320px */
    max-w-sm	    max-width: 24rem; /* 384px */
    max-w-md	    max-width: 28rem; /* 448px */
    max-w-lg	    max-width: 32rem; /* 512px */
    max-w-xl	    max-width: 36rem; /* 576px */
    max-w-2xl	    max-width: 42rem; /* 672px */
    max-w-3xl	    max-width: 48rem; /* 768px */
    max-w-4xl	    max-width: 56rem; /* 896px */
    max-w-5xl	    max-width: 64rem; /* 1024px */
    max-w-6xl	    max-width: 72rem; /* 1152px */
    max-w-7xl	    max-width: 80rem; /* 1280px */
    max-w-full	  max-width: 100%;
    max-w-min	    max-width: min-content;
    max-w-max	    max-width: max-content;
    max-w-fit	    max-width: fit-content;
    max-w-prose	  max-width: 65ch;
    max-w-screen-sm	max-width: 640px;
    max-w-screen-md	max-width: 768px;
    max-w-screen-lg	max-width: 1024px;
    max-w-screen-xl	max-width: 1280px;
    max-w-screen-2xl	max-width: 1536px;
-->

<!--
  Height Sizes
    h-0	        height: 0px;
    h-px	      height: 1px;
    h-0.5	      height: 0.125rem; /* 2px */
    h-1	        height: 0.25rem; /* 4px */
    h-1.5	      height: 0.375rem; /* 6px */
    h-2	        height: 0.5rem; /* 8px */
    h-2.5	      height: 0.625rem; /* 10px */
    h-3	        height: 0.75rem; /* 12px */
    h-3.5	      height: 0.875rem; /* 14px */
    h-4	        height: 1rem; /* 16px */
    h-5	        height: 1.25rem; /* 20px */
    h-6	        height: 1.5rem; /* 24px */
    h-7	        height: 1.75rem; /* 28px */
    h-8	        height: 2rem; /* 32px */
    h-9	        height: 2.25rem; /* 36px */
    h-10	      height: 2.5rem; /* 40px */
    h-11	      height: 2.75rem; /* 44px */
    h-12	      height: 3rem; /* 48px */
    h-14	      height: 3.5rem; /* 56px */
    h-16	      height: 4rem; /* 64px */
    h-20	      height: 5rem; /* 80px */
    h-24	      height: 6rem; /* 96px */
    h-28	      height: 7rem; /* 112px */
    h-32	      height: 8rem; /* 128px */
    h-36	      height: 9rem; /* 144px */
    h-40	      height: 10rem; /* 160px */
    h-44	      height: 11rem; /* 176px */
    h-48	      height: 12rem; /* 192px */
    h-52	      height: 13rem; /* 208px */
    h-56	      height: 14rem; /* 224px */
    h-60	      height: 15rem; /* 240px */
    h-64	      height: 16rem; /* 256px */
    h-72	      height: 18rem; /* 288px */
    h-80	      height: 20rem; /* 320px */
    h-96	      height: 24rem; /* 384px */
    h-auto	    height: auto;
    h-1/2	      height: 50%;
    h-1/3	      height: 33.333333%;
    h-2/3	      height: 66.666667%;
    h-1/4	      height: 25%;
    h-2/4	      height: 50%;
    h-3/4	      height: 75%;
    h-1/5	      height: 20%;
    h-2/5	      height: 40%;
    h-3/5	      height: 60%;
    h-4/5	      height: 80%;
    h-1/6	      height: 16.666667%;
    h-2/6	      height: 33.333333%;
    h-3/6	      height: 50%;
    h-4/6	      height: 66.666667%;
    h-5/6	      height: 83.333333%;
    h-full	    height: 100%;
    h-screen	  height: 100vh;
    h-min	      height: min-content;
    h-max	      height: max-content;
    h-fit	      height: fit-content;
-->

<!--
  Min Height Sizes
    min-h-0	        min-height: 0px;
    min-h-full	    min-height: 100%;
    min-h-screen	  min-height: 100vh;
    min-h-min	      min-height: min-content;
    min-h-max	      min-height: max-content;
    min-h-fit	      min-height: fit-content;
-->

<!--
  Max Height Sizes
    max-h-0         max-height: 0px;
    max-h-px	      max-height: 1px;
    max-h-0.5	      max-height: 0.125rem; /* 2px */
    max-h-1	        max-height: 0.25rem; /* 4px */
    max-h-1.5	      max-height: 0.375rem; /* 6px */
    max-h-2	        max-height: 0.5rem; /* 8px */
    max-h-2.5	      max-height: 0.625rem; /* 10px */
    max-h-3	        max-height: 0.75rem; /* 12px */
    max-h-3.5	      max-height: 0.875rem; /* 14px */
    max-h-4	        max-height: 1rem; /* 16px */
    max-h-5	        max-height: 1.25rem; /* 20px */
    max-h-6	        max-height: 1.5rem; /* 24px */
    max-h-7	        max-height: 1.75rem; /* 28px */
    max-h-8	        max-height: 2rem; /* 32px */
    max-h-9	        max-height: 2.25rem; /* 36px */
    max-h-10	      max-height: 2.5rem; /* 40px */
    max-h-11	      max-height: 2.75rem; /* 44px */
    max-h-12	      max-height: 3rem; /* 48px */
    max-h-14	      max-height: 3.5rem; /* 56px */
    max-h-16	      max-height: 4rem; /* 64px */
    max-h-20	      max-height: 5rem; /* 80px */
    max-h-24	      max-height: 6rem; /* 96px */
    max-h-28	      max-height: 7rem; /* 112px */
    max-h-32	      max-height: 8rem; /* 128px */
    max-h-36	      max-height: 9rem; /* 144px */
    max-h-40	      max-height: 10rem; /* 160px */
    max-h-44	      max-height: 11rem; /* 176px */
    max-h-48	      max-height: 12rem; /* 192px */
    max-h-52	      max-height: 13rem; /* 208px */
    max-h-56	      max-height: 14rem; /* 224px */
    max-h-60	      max-height: 15rem; /* 240px */
    max-h-64	      max-height: 16rem; /* 256px */
    max-h-72	      max-height: 18rem; /* 288px */
    max-h-80	      max-height: 20rem; /* 320px */
    max-h-96	      max-height: 24rem; /* 384px */
    max-h-full	    max-height: 100%;
    max-h-screen	  max-height: 100vh;
    max-h-min	      max-height: min-content;
    max-h-max	      max-height: max-content;
    max-h-fit	      max-height: fit-content;
-->
```

## Layout Position

```xml
<!-- Positioning -->
<div class="relative w-1/2 h-12 bg-red-200">
  <p>Relative parent</p>
  <div class="absolute bottom-0 right-0 bg-red-500">
    <p>Absolute child</p>
  </div>
</div>

<!-- Top left corner -->
<div class="relative h-32 w-32 bg-yellow-100">
  <div class="absolute left-0 top-0 h-16 w-16 bg-yellow-300">01</div>
</div>

<!-- Top right corner -->
<div class="relative h-32 w-32 bg-yellow-100">
  <div class="absolute top-0 right-0 h-16 w-16 bg-yellow-300">03</div>
</div>

<!-- Bottom left corner -->
<div class="relative h-32 w-32 bg-yellow-100">
  <div class="absolute bottom-0 left-0 h-16 w-16 bg-yellow-300">07</div>
</div>

<!-- Bottom right corner -->
<div class="relative h-32 w-32 bg-yellow-100">
  <div class="absolute bottom-0 right-0 h-16 w-16 bg-yellow-300">09</div>
</div>

<!-- Span top edge -->
<div class="relative h-32 w-32 bg-yellow-100">
  <div class="absolute inset-x-0 top-0 h-16 bg-yellow-300">02</div>
</div>

<!-- Span left edge -->
<div class="relative h-32 w-32 bg-yellow-100">
  <div class="absolute inset-y-0 left-0 w-16 bg-yellow-300">04</div>
</div>

<!-- Span right edge -->
<div class="relative h-32 w-32 bg-yellow-100">
  <div class="absolute inset-y-0 right-0 w-16 bg-yellow-300">06</div>
</div>

<!-- Span bottom edge -->
<div class="relative h-32 w-32 bg-yellow-100">
  <div class="absolute inset-x-0 bottom-0 h-16 bg-yellow-300">08</div>
</div>

<!-- Display Classes -->
<div>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
  <span class="inline">This is display inline and will wrap normally</span
  >sapiente ut rerum esse ullam provident, fugit
  <span class="inline-block"
    >This is display inline-block and will not extend beyond it's
    parent</span
  >eos quam
  <span class="block"
    >This is display block and will move to it's own line</span
  >
  reprehenderit est hic aut unde sequi, officia, ipsa amet doloribus
  ratione<span class="hidden"
    >This is display none and will not display at all</span
  >
  ad.
</div>

<!-- Z-Index -->
<div class="relative h-36">
  <div class="absolute left-10 w-24 h-24 bg-blue-200 z-40">1</div>
  <div class="absolute left-20 w-24 h-24 bg-blue-300">2</div>
  <div class="absolute left-40 w-24 h-24 bg-blue-400 z-10">3</div>
  <div class="absolute left-60 w-24 h-24 bg-blue-500 z-20">4</div>
  <div class="absolute left-80 w-24 h-24 bg-blue-600">5</div>
</div>

<!-- Floats -->
<div class="w-1/2">
  <img class="h-48 w-48 float-right" src="/assets/img/img1.jpg" />
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere numquam
    voluptatem accusantium atque cupiditate nulla ratione saepe veniam, ex
    iure nisi mollitia sed rerum veritatis temporibus iusto! Molestiae,
    ratione doloribus?
  </p>
</div>

<!-- Position Classes
  static	    position: static;
  fixed	      position: fixed;
  absolute	  position: absolute;
  relative	  position: relative;
  sticky	    position: sticky;
-->

<!-- Display Classes
  block	            display: block;
  inline-block	    display: inline-block;
  inline	          display: inline;
  flex	            display: flex;
  inline-flex	      display: inline-flex;
  table	            display: table;
  grid	            display: grid;
  inline-grid	      display: inline-grid;
  contents	        display: contents;
  list-item	        display: list-item;
  hidden	          display: none;
-->

<!-- Z-Index
  z-0	    z-index: 0;
  z-10	  z-index: 10;
  z-20	  z-index: 20;
  z-30	  z-index: 30;
  z-40	  z-index: 40;
  z-50	  z-index: 50;
  z-auto	z-index: auto;
-->

<!-- Float
  float-right	  float: right;
  float-left	  float: left;
  float-none	  float: none;
-->
```

## Backgrounds & Shadows

```xml
<!-- Background Classes -->
<div
  class="h-64 w-72 bg-blue-500 bg-cover bg-no-repeat bg-center"
  style="background-image: url('../assets/img/img1.jpg')"
></div>

<!-- Gradients -->
<div class="h-24 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
<div
  class="h-24 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
></div>

<!-- Shadows -->
<div class="w-96 mt-6 ml-4 p-3 shadow-md">
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia minus
  deleniti iusto delectus alias natus quam dolor explicabo quas eius!
</div>
<div class="w-96 mt-6 ml-4 p-3 shadow-lg">
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia minus
  deleniti iusto delectus alias natus quam dolor explicabo quas eius!
</div>
<div class="w-96 mt-6 ml-4 p-3 shadow-xl">
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia minus
  deleniti iusto delectus alias natus quam dolor explicabo quas eius!
</div>
<div class="w-96 mt-6 ml-4 p-3 shadow-2xl">
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia minus
  deleniti iusto delectus alias natus quam dolor explicabo quas eius!
</div>
<div class="w-96 mt-6 ml-4 p-3 shadow-inner">
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia minus
  deleniti iusto delectus alias natus quam dolor explicabo quas eius!
</div>
<!-- Shadow Colors -->
<div class="w-96 mt-6 ml-4 p-3 shadow-xl shadow-blue-500/50">
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia minus
  deleniti iusto delectus alias natus quam dolor explicabo quas eius!
</div>
<div class="w-96 mt-6 ml-4 p-3 shadow-xl shadow-red-500/100">
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia minus
  deleniti iusto delectus alias natus quam dolor explicabo quas eius!
</div>

<!-- Mix Blend -->
<div class="flex justify-center -space-x-24">
  <div class="mix-blend-multiply bg-blue-400 ...">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia minus
    deleniti iusto delectus alias natus quam dolor explicabo quas eius!
  </div>
  <div class="mix-blend-multiply bg-pink-400 ...">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia minus
    deleniti iusto delectus alias natus quam dolor explicabo quas eius!
  </div>
</div>

<!-- Background Size
  bg-auto	    background-size: auto;
  bg-cover	  background-size: cover;
  bg-contain	background-size: contain;
-->

<!-- Background Repeat
  bg-repeat	      background-repeat: repeat;
  bg-no-repeat	  background-repeat: no-repeat;
  bg-repeat-x	    background-repeat: repeat-x;
  bg-repeat-y	    background-repeat: repeat-y;
  bg-repeat-round	background-repeat: round;
  bg-repeat-space	background-repeat: space;
-->

<!-- Background Position
  bg-bottom	      background-position: bottom;
  bg-center	      background-position: center;
  bg-left	        background-position: left;
  bg-left-bottom	background-position: left bottom;
  bg-left-top	    background-position: left top;
  bg-right	      background-position: right;
  bg-right-bottom	background-position: right bottom;
  bg-right-top	  background-position: right top;
  bg-top	        background-position: top;
-->

<!-- Background Attachment
  bg-fixed	  background-attachment: fixed;
  bg-local	  background-attachment: local;
  bg-scroll	  background-attachment: scroll;
-->

<!-- Shadows
  shadow-sm	    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  shadow	      box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  shadow-md	    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  shadow-lg	    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  shadow-xl	    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  shadow-2xl	  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  shadow-inner	box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
  shadow-none	  box-shadow: 0 0 #0000;
-->
```

## Borders

```xml
<!-- Border Width & Colors -->
<div class="w-96 m-3 p-5 border">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id consequuntur
  reiciendis odio eaque vitae nostrum sunt tempora deleniti repellendus
  dolores.
</div>
<div class="w-96 m-3 p-5 border-2 border-blue-500">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id consequuntur
  reiciendis odio eaque vitae nostrum sunt tempora deleniti repellendus
  dolores.
</div>
<div class="w-96 m-3 p-5 border-4 border-red-500">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id consequuntur
  reiciendis odio eaque vitae nostrum sunt tempora deleniti repellendus
  dolores.
</div>
<div class="w-96 m-3 p-5 border-x-2 border-zinc-500">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id consequuntur
  reiciendis odio eaque vitae nostrum sunt tempora deleniti repellendus
  dolores.
</div>
<div class="w-96 m-3 p-5 border-x-2 border-zinc-500">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id consequuntur
  reiciendis odio eaque vitae nostrum sunt tempora deleniti repellendus
  dolores.
</div>
<div class="w-96 m-3 p-5 border-y-2 border-zinc-500">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id consequuntur
  reiciendis odio eaque vitae nostrum sunt tempora deleniti repellendus
  dolores.
</div>
<div class="w-96 m-3 p-5 border-r-2 border-zinc-500">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id consequuntur
  reiciendis odio eaque vitae nostrum sunt tempora deleniti repellendus
  dolores.
</div>
<div class="w-96 m-3 p-5 border-l-2 border-zinc-500">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id consequuntur
  reiciendis odio eaque vitae nostrum sunt tempora deleniti repellendus
  dolores.
</div>
<div class="w-96 m-3 p-5 border-b-2 border-zinc-500">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id consequuntur
  reiciendis odio eaque vitae nostrum sunt tempora deleniti repellendus
  dolores.
</div>
<div class="w-96 m-3 p-5 border-t-2 border-zinc-500">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id consequuntur
  reiciendis odio eaque vitae nostrum sunt tempora deleniti repellendus
  dolores.
</div>

<!-- Border Radius -->
<div class="w-96 m-3 p-5 bg-gray-300 rounded">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id consequuntur
  reiciendis odio eaque vitae nostrum sunt tempora deleniti repellendus
  dolores.
</div>
<div class="w-96 m-3 p-5 bg-gray-300 rounded-lg">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id consequuntur
  reiciendis odio eaque vitae nostrum sunt tempora deleniti repellendus
  dolores.
</div>
<div class="w-96 m-3 p-5 bg-gray-300 rounded-xl">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id consequuntur
  reiciendis odio eaque vitae nostrum sunt tempora deleniti repellendus
  dolores.
</div>
<div class="w-96 m-3 p-5 bg-gray-300 rounded-2xl">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id consequuntur
  reiciendis odio eaque vitae nostrum sunt tempora deleniti repellendus
  dolores.
</div>
<div class="w-96 m-3 p-5 bg-gray-300 rounded-3xl">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id consequuntur
  reiciendis odio eaque vitae nostrum sunt tempora deleniti repellendus
  dolores.
</div>
<div class="w-96 m-3 p-5 bg-gray-300 rounded-full">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id consequuntur
  reiciendis odio eaque vitae nostrum sunt tempora deleniti repellendus
  dolores.
</div>

<!-- Specific Sides -->
<div class="w-96 m-3 p-5 bg-gray-300 rounded-t-xl">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id consequuntur
  reiciendis odio eaque vitae nostrum sunt tempora deleniti repellendus
  dolores.
</div>
<div class="w-96 m-3 p-5 bg-gray-300 rounded-b-xl">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id consequuntur
  reiciendis odio eaque vitae nostrum sunt tempora deleniti repellendus
  dolores.
</div>

<!-- Outline -->
<button class="outline outline-offset-2 outline-1">Button 1</button>
<button class="outline outline-offset-2 outline-2">Button 2</button>
<button class="outline outline-offset-2 outline-4">Button 3</button>

<!-- Border Widths
  border-0	    border-width: 0px;
  border-2	    border-width: 2px;
  border-4	    border-width: 4px;
  border-8	    border-width: 8px;
  border	      border-width: 1px;
  border-x-0	  border-left-width: 0px;
                border-right-width: 0px;
  border-x-2	  border-left-width: 2px;
                border-right-width: 2px;
  border-x-4    border-left-width: 4px;
                border-right-width: 4px;
  border-x-8	  border-left-width: 8px;
                border-right-width: 8px;
  border-x	    border-left-width: 1px;
                border-right-width: 1px;
  border-y-0  	border-top-width: 0px;
                border-bottom-width: 0px;
  border-y-2	  border-top-width: 2px;
                border-bottom-width: 2px;
  border-y-4	  border-top-width: 4px;
                border-bottom-width: 4px;
  border-y-8	  border-top-width: 8px;
                border-bottom-width: 8px;
  border-y	    border-top-width: 1px;
                border-bottom-width: 1px;
  border-t-0	  border-top-width: 0px;
  border-t-2	  border-top-width: 2px;
  border-t-4	  border-top-width: 4px;
  border-t-8	  border-top-width: 8px;
  border-t	    border-top-width: 1px;
  border-r-0	  border-right-width: 0px;
  border-r-2	  border-right-width: 2px;
  border-r-4	  border-right-width: 4px;
  border-r-8	  border-right-width: 8px;
  border-r	    border-right-width: 1px;
  border-b-0	  border-bottom-width: 0px;
  border-b-2	  border-bottom-width: 2px;
  border-b-4	  border-bottom-width: 4px;
  border-b-8	  border-bottom-width: 8px;
  border-b	    border-bottom-width: 1px;
  border-l-0	  border-left-width: 0px;
  border-l-2	  border-left-width: 2px;
  border-l-4	  border-left-width: 4px;
  border-l-8	  border-left-width: 8px;
  border-l	    border-left-width: 1px;
-->

<!-- Border Radius
  rounded-none	    border-radius: 0px;
  rounded-sm	      border-radius: 0.125rem; /* 2px */
  rounded	          border-radius: 0.25rem; /* 4px */
  rounded-md	      border-radius: 0.375rem; /* 6px */
  rounded-lg	      border-radius: 0.5rem; /* 8px */
  rounded-xl	      border-radius: 0.75rem; /* 12px */
  rounded-2xl	      border-radius: 1rem; /* 16px */
  rounded-3xl	      border-radius: 1.5rem; /* 24px */
  rounded-full	    border-radius: 9999px;
-->

<!-- Outline
  outline-0	outline-width: 0px;
  outline-1	outline-width: 1px;
  outline-2	outline-width: 2px;
  outline-4	outline-width: 4px;
  outline-8	outline-width: 8px;
-->
```

## Filters

```xml
<!-- Blur -->
<div class="blur-none">
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque deserunt
  animi quas aliquam consectetur ut obcaecati voluptas repudiandae odit
  harum?
</div>
<div class="blur-sm">
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque deserunt
  animi quas aliquam consectetur ut obcaecati voluptas repudiandae odit
  harum?
</div>
<div class="blur-lg">
  <img class="w-48" src="/assets/img/img1.jpg" alt="" />
</div>
<div class="blur-2xl">
  <img class="w-48" src="/assets/img/img1.jpg" alt="" />
</div>

<!-- Brightness -->
<div class="brightness-50">
  <img class="w-48" src="/assets/img/img2.jpg" alt="" />
</div>
<div class="brightness-100">
  <img class="w-48" src="/assets/img/img2.jpg" alt="" />
</div>
<div class="brightness-150">
  <img class="w-48" src="/assets/img/img2.jpg" alt="" />
</div>
<div class="brightness-200">
  <img class="w-48" src="/assets/img/img2.jpg" alt="" />
</div>

<!-- Contrast -->
<div class="contrast-50">
  <img class="w-48" src="/assets/img/img2.jpg" alt="" />
</div>
<div class="contrast-100">
  <img class="w-48" src="/assets/img/img2.jpg" alt="" />
</div>
<div class="contrast-150">
  <img class="w-48" src="/assets/img/img2.jpg" alt="" />
</div>
<div class="contrast-200">
  <img class="w-48" src="/assets/img/img2.jpg" alt="" />
</div>

<!-- Grayscale -->
<div class="grayscale">
  <img class="w-48" src="/assets/img/img3.jpg" alt="" />
</div>

<!-- Invert -->
<div class="invert">
  <img class="w-48" src="/assets/img/img3.jpg" alt="" />
</div>

<!-- Sepia -->
<div class="sepia">
  <img class="w-48" src="/assets/img/img3.jpg" alt="" />
</div>

<!-- Hue Rotate -->
<div class="hue-rotate-15">
  <img class="w-48" src="/assets/img/img3.jpg" alt="" />
</div>
<div class="hue-rotate-90">
  <img class="w-48" src="/assets/img/img3.jpg" alt="" />
</div>
<div class="hue-rotate-180">
  <img class="w-48" src="/assets/img/img3.jpg" alt="" />
</div>
<div class="hue-rotate-60">
  <img class="w-48" src="/assets/img/img3.jpg" alt="" />
</div>

<!-- Saturate -->
<div class="saturate-50">
  <img class="w-48" src="/assets/img/img4.jpg" alt="" />
</div>
<div class="saturate-100">
  <img class="w-48" src="/assets/img/img4.jpg" alt="" />
</div>
<div class="saturate-150">
  <img class="w-48" src="/assets/img/img4.jpg" alt="" />
</div>
<div class="saturate-200">
  <img class="w-48" src="/assets/img/img4.jpg" alt="" />
</div>

<!-- Blur
  blur-none	    filter: blur(0);
  blur-sm	      filter: blur(4px);
  blur	        filter: blur(8px);
  blur-md	      filter: blur(12px);
  blur-lg	      filter: blur(16px);
  blur-xl	      filter: blur(24px);
  blur-2xl	    filter: blur(40px);
  blur-3xl	    filter: blur(64px);
-->

<!-- Brightness
  brightness-0	    filter: brightness(0);
  brightness-50	    filter: brightness(.5);
  brightness-75	    filter: brightness(.75);
  brightness-90	    filter: brightness(.9);
  brightness-95	    filter: brightness(.95);
  brightness-100	  filter: brightness(1);
  brightness-105	  filter: brightness(1.05);
  brightness-110	  filter: brightness(1.1);
  brightness-125	  filter: brightness(1.25);
  brightness-150	  filter: brightness(1.5);
  brightness-200	  filter: brightness(2);
-->

<!-- Contrast
  contrast-0	  filter: contrast(0);
  contrast-50	  filter: contrast(.5);
  contrast-75	  filter: contrast(.75);
  contrast-100	filter: contrast(1);
  contrast-125	filter: contrast(1.25);
  contrast-150	filter: contrast(1.5);
  contrast-200	filter: contrast(2);
-->

<!-- Hue Rotate
  hue-rotate-0	    filter: hue-rotate(0deg);
  hue-rotate-15	    filter: hue-rotate(15deg);
  hue-rotate-30	    filter: hue-rotate(30deg);
  hue-rotate-60	    filter: hue-rotate(60deg);
  hue-rotate-90	    filter: hue-rotate(90deg);
  hue-rotate-180	  filter: hue-rotate(180deg);
-->
```

## Interactivity

```xml
<a href="#item">Scroll To Item</a>
<!-- Hover State Styling -->
<button
  type="button"
  class="bg-black text-white py-3 px-5 rounded-lg m-3 hover:bg-orange-500 hover:text-black"
>
  Submit
</button>
<!-- Focus State Styling -->
<button
  type="button"
  class="bg-black text-white py-3 px-5 rounded-lg m-3 focus:bg-green-500 focus:text-black"
>
  Submit
</button>
<!-- Active State Styling -->
<button
  type="button"
  class="bg-black text-white py-3 px-5 rounded-lg m-3 active:bg-yellow-500 active:text-black"
>
  Submit
</button>

<br>

<!-- Styling based on parent state -->
<!-- When you need to style an element based on the state of some parent element, mark the parent with the group class, and use group-* modifiers like group-hover to style the target element: -->
<a href="#" class="group block max-w-xs mx-auto rounded-lg p-6 bg-white shadow-lg space-y-3 hover:bg-sky-500">
<div class="flex items-center">
<h3 class="group-hover:text-white">Card Title</h3>
</div>
<p class="group-hover:text-white">This is some card text</p>
</a>

<br>

<!-- Pseudo Classes -->
<ul>
  <li class="even:bg-green-200 odd:bg-blue-200">Item 1</li>
  <li class="even:bg-green-200 odd:bg-blue-200">Item 2</li>
  <li class="even:bg-green-200 odd:bg-blue-200">Item 3</li>
  <li class="even:bg-green-200 odd:bg-blue-200">Item 4</li>
  <li class="even:bg-green-200 odd:bg-blue-200">Item 5</li>
  <li class="even:bg-green-200 odd:bg-blue-200">Item 6</li>
  <li class="even:bg-green-200 odd:bg-blue-200">Item 7</li>
  <li class="even:bg-green-200 odd:bg-blue-200">Item 8</li>
  <li class="even:bg-green-200 odd:bg-blue-200">Item 9</li>
  <li class="even:bg-green-200 odd:bg-blue-200">Item 10</li>
</ul>

<br />

<!-- Appearance -->
<!-- Use appearance-none to reset any browser specific styling on an element. This utility is often used when creating custom form components. -->
<select>
  <option>Yes</option>
  <option>No</option>
</select>

<select class="appearance-none">
  <option>Yes</option>
  <option>No</option>
</select>

<br />

<!-- Cursor -->
<button
  type="button"
  class="bg-black text-white py-3 px-5 rounded-lg m-3 cursor-pointer"
>
  Submit
</button>
<button
  type="button"
  class="bg-black text-yellow-500 py-3 px-5 rounded-lg m-3 cursor-progress"
>
  Loading...
</button>
<button
  type="button"
  disabled
  class="bg-black text-red-200 py-3 px-5 rounded-lg m-3 cursor-not-allowed"
>
  Confirm
</button>

<br />

<!-- Resize -->
<textarea class="border border-black rounded resize"></textarea>

<!-- User Select -->
<div class="select-none">Lorem ipsum dolor sit amet.</div>
<div class="select-text">Lorem ipsum dolor sit amet.</div>
<div class="select-all">Lorem ipsum dolor sit amet.</div>
<div class="select-auto">Lorem ipsum dolor sit amet.</div>

<!-- Cursor
  cursor-auto	          cursor: auto;
  cursor-default	      cursor: default;
  cursor-pointer	      cursor: pointer;
  cursor-wait	          cursor: wait;
  cursor-text	          cursor: text;
  cursor-move	          cursor: move;
  cursor-help	          cursor: help;
  cursor-not-allowed	  cursor: not-allowed;
  cursor-none	          cursor: none;
  cursor-context-menu	  cursor: context-menu;
  cursor-progress	      cursor: progress;
  cursor-cell	          cursor: cell;
  cursor-crosshair	    cursor: crosshair;
  cursor-vertical-text	cursor: vertical-text;
  cursor-alias	        cursor: alias;
  cursor-copy	          cursor: copy;
  cursor-no-drop	      cursor: no-drop;
  cursor-grab	          cursor: grab;
  cursor-grabbing	      cursor: grabbing;
  cursor-all-scroll	    cursor: all-scroll;
  cursor-col-resize	    cursor: col-resize;
  cursor-row-resize	    cursor: row-resize;
  cursor-n-resize	      cursor: n-resize;
  cursor-e-resize	      cursor: e-resize;
  cursor-s-resize	      cursor: s-resize;
  cursor-w-resize	      cursor: w-resize;
  cursor-ne-resize	    cursor: ne-resize;
  cursor-nw-resize	    cursor: nw-resize;
  cursor-se-resize	    cursor: se-resize;
  cursor-sw-resize	    cursor: sw-resize;
  cursor-ew-resize	    cursor: ew-resize;
  cursor-ns-resize	    cursor: ns-resize;
  cursor-nesw-resize	  cursor: nesw-resize;
  cursor-nwse-resize	  cursor: nwse-resize;
  cursor-zoom-in	      cursor: zoom-in;
  cursor-zoom-out	      cursor: zoom-out;
-->
```

## Breakpoints & Media Queries

```xml
<!-- Tailwind is mobile-first -->
<body
  class="bg-black sm:bg-green-800 md:bg-blue-800 lg:bg-yellow-800 xl:bg-purple-800 2xl:bg-orange-800"
>
  <h1 class="text-white text-xl md:text-3xl xl:text-5xl">
    Tailwind is awesome
  </h1>
</body>

<!-- Breakpoint Classes
  sm	640px	  @media (min-width: 640px) { ... }
  md	768px	  @media (min-width: 768px) { ... }
  lg	1024px	@media (min-width: 1024px) { ... }
  xl	1280px	@media (min-width: 1280px) { ... }
  2xl	1536px	@media (min-width: 1536px) { ... }
-->
```

## Columns

```xml
<div class="columns-2 gap-8">
  <img class="w-full" src="/assets/img/img1.jpg" />
  <img class="w-full" src="/assets/img/img2.jpg" />
  <img class="w-full break-after-column" src="/assets/img/img3.jpg" />
  <img class="w-full" src="/assets/img/img4.jpg" />
</div>
<div class="columns-3 gap-24">
  <img class="w-full" src="/assets/img/img3.jpg" />
  <img class="w-full break-before-column" src="/assets/img/img4.jpg" />
  <img class="w-full" src="/assets/img/img5.jpg" />
  <img class="w-full" src="/assets/img/img6.jpg" />
  <img class="w-full" src="/assets/img/img7.jpg" />
</div>
<div class="columns-3xs">
  <!-- Video Aspect Ratio -->
  <img class="w-full aspect-video" src="/assets/img/img8.jpg" />
  <!-- Square Aspect Ratio -->
  <img class="w-full aspect-square" src="/assets/img/img9.jpg" />
  <img class="w-full break" src="/assets/img/img1.jpg" />
  <img class="w-full" src="/assets/img/img2.jpg" />
</div>

<!-- Column Classes
  columns-1	      columns: 1;
  columns-2	      columns: 2;
  columns-3	      columns: 3;
  columns-4	      columns: 4;
  columns-5	      columns: 5;
  columns-6	      columns: 6;
  columns-7	      columns: 7;
  columns-8	      columns: 8;
  columns-9	      columns: 9;
  columns-10	    columns: 10;
  columns-11	    columns: 11;
  columns-12	    columns: 12;
  columns-auto	  columns: auto;
  columns-3xs	    columns: 16rem; /* 256px */
  columns-2xs	    columns: 18rem; /* 288px */
  columns-xs	    columns: 20rem; /* 320px */
  columns-sm	    columns: 24rem; /* 384px */
  columns-md	    columns: 28rem; /* 448px */
  columns-lg	    columns: 32rem; /* 512px */
  columns-xl	    columns: 36rem; /* 576px */
  columns-2xl	    columns: 42rem; /* 672px */
  columns-3xl	    columns: 48rem; /* 768px */
  columns-4xl	    columns: 56rem; /* 896px */
  columns-5xl	    columns: 64rem; /* 1024px */
  columns-6xl	    columns: 72rem; /* 1152px */
  columns-7xl	    columns: 80rem; /* 1280px */
-->

<!-- Break After
  break-after-auto	break-after: auto;
  break-after-avoid	break-after: avoid;
  break-after-all	break-after: all;
  break-after-avoid-page	break-after: avoid-page;
  break-after-page	break-after: page;
  break-after-left	break-after: left;
  break-after-right	break-after: right;
  break-after-column	break-after: column;
-->

<!-- Break Before
  reak-before-auto	break-before: auto;
  break-before-avoid	break-before: avoid;
  break-before-all	break-before: all;
  break-before-avoid-page	break-before: avoid-page;
  break-before-page	break-before: page;
  break-before-left	break-before: left;
  break-before-right	break-before: right;
  break-before-column	break-before: column;
-->
```

## Flex

```xml
<!-- Flex and alignment -->
<div
  class="flex flex-wrap h-72 w-100 bg-gray-100 justify-around items-center"
>
  <div class="p-10 border border-blue-600 bg-blue-100">01</div>
  <div class="p-10 border border-blue-600 bg-blue-100">02</div>
  <div class="self-start p-10 border border-blue-600 bg-blue-100">03</div>
  <div class="self-end p-10 border border-blue-600 bg-blue-100">04</div>
</div>

<!-- Flex Column, Gap and Order -->
<div
  class="flex flex-col gap-4 w-100 bg-gray-200 justify-around items-center"
>
  <div class="order-4 p-10 border border-blue-600 bg-blue-100">01</div>
  <div class="order-1 p-10 border border-blue-600 bg-blue-100">02</div>
  <div class="p-10 border border-blue-600 bg-blue-100">03</div>
  <div class="p-10 border border-blue-600 bg-blue-100">04</div>
</div>

<!-- Grow and shrink -->
<div class="flex w-100 bg-gray-300">
  <!-- flex-none: Prevent item from growing or shrinking -->
  <div class="w-64 flex-none p-10 border border-blue-600 bg-blue-100">
    01
  </div>
  <!-- flex-initial:  Allow item to shrink but not grow, taking into account its initial size  -->
  <div class="w-64 flex-initial p-10 border border-blue-600 bg-blue-100">
    02
  </div>
  <!-- flex-auto: Allow item to grow and shrink, taking into account its initial size -->
  <div class="w-64 flex-auto p-10 border border-blue-600 bg-blue-100">
    03
  </div>
  <!-- flex-1: Allow item to grow and shrink as needed, ignoring its initial size -->
  <div class="w-64 flex-1 p-10 border border-blue-600 bg-blue-100">04</div>
  <div class="p-10 border border-blue-600 bg-blue-100">05</div>
  <div class="p-10 border border-blue-600 bg-blue-100">06</div>
  <div class="p-10 border border-blue-600 bg-blue-100">07</div>
</div>

<!-- Justify Content
  justify-start	      justify-content: flex-start;
  justify-end	        justify-content: flex-end;
  justify-center	    justify-content: center;
  justify-between	    justify-content: space-between;
  justify-around	    justify-content: space-around;
  justify-evenly	    justify-content: space-evenly;
-->

<!--
  items-start	      align-items: flex-start;
  items-end	        align-items: flex-end;
  items-center      align-items: center;
  items-baseline  	align-items: baseline;
  items-stretch	    align-items: stretch;
-->

<!-- Flex Direction
  flex-row	        flex-direction: row;
  flex-row-reverse	flex-direction: row-reverse;
  flex-col	        flex-direction: column;
  flex-col-reverse	flex-direction: column-reverse;
-->

<!--
  flex-wrap	        flex-wrap: wrap;
  flex-wrap-reverse	flex-wrap: wrap-reverse;
  flex-nowrap	      flex-wrap: nowrap;
  -->

<!-- Flex Properties
  flex-none	    flex: none;
  Prevent item from growing or shrinking

  flex-initial	flex: 0 1 auto;
  Allow item to shrink but not grow, taking into account its initial size

  flex-auto	    flex: 1 1 auto;
  Allow item to grow and shrink, taking into account its initial size

  flex-1	      flex: 1 1 0%;
  Allow item to grow and shrink as needed, ignoring its initial size
-->
```

## Grid

```xml
<!-- Grid cols and rows -->
<div class="grid grid-cols-3 grid-rows-4 gap-4 w-100 bg-gray-100">
  <div class="p-10 border border-blue-600 bg-blue-100">01</div>
  <div class="p-10 border border-blue-600 bg-blue-100">02</div>
  <div class="p-10 border border-blue-600 bg-blue-100">03</div>
  <div class="p-10 border border-blue-600 bg-blue-100">04</div>
  <div class="p-10 border border-blue-600 bg-blue-100">05</div>
  <div class="p-10 border border-blue-600 bg-blue-100">06</div>
  <div class="p-10 border border-blue-600 bg-blue-100">07</div>
  <div class="p-10 border border-blue-600 bg-blue-100">08</div>
  <div class="p-10 border border-blue-600 bg-blue-100">09</div>
</div>

<!-- Col and row span -->
<div class="grid grid-cols-3 gap-4 w-100 bg-gray-100">
  <div
    class="col-span-2 row-span-2 p-10 border border-blue-600 bg-blue-100"
  >
    01
  </div>
  <div class="p-10 border border-blue-600 bg-blue-100">02</div>
  <div class="p-10 border border-blue-600 bg-blue-100">03</div>
  <div class="p-10 border border-blue-600 bg-blue-100">04</div>
  <div class="p-10 border border-blue-600 bg-blue-100">05</div>
  <div class="p-10 border border-blue-600 bg-blue-100">06</div>
  <div class="col-span-3 p-10 border border-blue-600 bg-blue-100">07</div>
  <div class="p-10 border border-blue-600 bg-blue-100">08</div>
  <div class="col-span-2 p-10 border border-blue-600 bg-blue-100">09</div>
</div>

<!-- Grid Template Columns
  grid-cols-1	    grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-cols-2	    grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-cols-3	    grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-cols-4	    grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-cols-5	    grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-cols-6	    grid-template-columns: repeat(6, minmax(0, 1fr));
  grid-cols-7	    grid-template-columns: repeat(7, minmax(0, 1fr));
  grid-cols-8	    grid-template-columns: repeat(8, minmax(0, 1fr));
  grid-cols-9	    grid-template-columns: repeat(9, minmax(0, 1fr));
  grid-cols-10	  grid-template-columns: repeat(10, minmax(0, 1fr));
  grid-cols-11	  grid-template-columns: repeat(11, minmax(0, 1fr));
  grid-cols-12	  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-cols-none	grid-template-columns: none;
-->

<!-- Grid Template Rows
  grid-rows-1	    grid-template-rows: repeat(1, minmax(0, 1fr));
  grid-rows-2	    grid-template-rows: repeat(2, minmax(0, 1fr));
  grid-rows-3	    grid-template-rows: repeat(3, minmax(0, 1fr));
  grid-rows-4	    grid-template-rows: repeat(4, minmax(0, 1fr));
  grid-rows-5	    grid-template-rows: repeat(5, minmax(0, 1fr));
  grid-rows-6	    grid-template-rows: repeat(6, minmax(0, 1fr));
  grid-rows-none	grid-template-rows: none;
-->
```

## Transform & Transition

```xml
<!-- No Transition -->
<button
  class="px-8 py-2 m-24 text-white bg-blue-500 rounded hover:bg-blue-700"
>
  Click me
</button>

<!-- Transition -->
<button
  class="px-8 py-2 m-24 text-white bg-blue-500 rounded transition-colors duration-700 hover:bg-blue-700"
>
  Click me
</button>

<!-- Transition & Transform -->
<button
  class="px-8 py-2 m-24 text-white bg-blue-500 rounded transition ease-in-out delay-150 duration-2000 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
>
  Click me
</button>

<!-- Transform & Transition -->
<img
  src="../assets/img/img1.jpg"
  alt=""
  class="hover:transform hover:rotate-180 hover:scale-75 hover:skew-x-12 transition"
/>

<!-- Transition Property
  transition-none
  transition-property: none;

  transition-all
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  transition
  transition-property: color, background-color, border-color,
  text-decoration-color, fill, stroke, opacity, box-shadow,
  transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  transition-colors
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  transition-opacity
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  transition-shadow
  transition-property: box-shadow;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  transition-transform	transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
-->

<!--
  Duration
  duration-75	    transition-duration: 75ms;
  duration-100	  transition-duration: 100ms;
  duration-150	  transition-duration: 150ms;
  duration-200	  transition-duration: 200ms;
  duration-300	  transition-duration: 300ms;
  duration-500	  transition-duration: 500ms;
  duration-700	  transition-duration: 700ms;
  duration-1000	  transition-duration: 1000ms;
 -->

<!-- Timing Function
  ease-linear	      transition-timing-function: linear;
  ease-in	          transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
  ease-out	        transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  ease-in-out	      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
-->

<!-- Delay
  delay-75	  transition-delay: 75ms;
  delay-100	  transition-delay: 100ms;
  delay-150	  transition-delay: 150ms;
  delay-200	  transition-delay: 200ms;
  delay-300	  transition-delay: 300ms;
  delay-500	  transition-delay: 500ms;
  delay-700	  transition-delay: 700ms;
  delay-1000	transition-delay: 1000ms;
-->

<!-- TRANSFORMS -->

<!-- Scale
  scale-0	    transform: scale(0);
  scale-x-0	  transform: scaleX(0);
  scale-y-0	  transform: scaleY(0);
  scale-50	  transform: scale(.5);
  scale-x-50	transform: scaleX(.5);
  scale-y-50	transform: scaleY(.5);
  scale-75	  transform: scale(.75);
  scale-x-75	transform: scaleX(.75);
  scale-y-75	transform: scaleY(.75);
  scale-90	  transform: scale(.9);
  scale-x-90	transform: scaleX(.9);
  scale-y-90	transform: scaleY(.9);
  scale-95	  transform: scale(.95);
  scale-x-95	transform: scaleX(.95);
  scale-y-95	transform: scaleY(.95);
  scale-100	  transform: scale(1);
  scale-x-100	transform: scaleX(1);
  scale-y-100	transform: scaleY(1);
  scale-105	  transform: scale(1.05);
  scale-x-105	transform: scaleX(1.05);
  scale-y-105	transform: scaleY(1.05);
  scale-110	  transform: scale(1.1);
  scale-x-110	transform: scaleX(1.1);
  scale-y-110	transform: scaleY(1.1);
  scale-125	  transform: scale(1.25);
  scale-x-125	transform: scaleX(1.25);
  scale-y-125	transform: scaleY(1.25);
  scale-150	  transform: scale(1.5);
  scale-x-150	transform: scaleX(1.5);
  scale-y-150	transform: scaleY(1.5);
-->

<!-- Rotate
  rotate-0	  transform: rotate(0deg);
  rotate-1	  transform: rotate(1deg);
  rotate-2	  transform: rotate(2deg);
  rotate-3	  transform: rotate(3deg);
  rotate-6	  transform: rotate(6deg);
  rotate-12	  transform: rotate(12deg);
  rotate-45	  transform: rotate(45deg);
  rotate-90	  transform: rotate(90deg);
  rotate-180	transform: rotate(180deg);
-->

<!-- Translate
  translate-x-0	transform: translateX(0px);
  translate-y-0	transform: translateY(0px);
  translate-x-px	transform: translateX(1px);
  translate-y-px	transform: translateY(1px);
  translate-x-0.5	transform: translateX(0.125rem);
  translate-y-0.5	transform: translateY(0.125rem);
  translate-x-1	transform: translateX(0.25rem);
  translate-y-1	transform: translateY(0.25rem);
  translate-x-1.5	transform: translateX(0.375rem);
  translate-y-1.5	transform: translateY(0.375rem);
  translate-x-2	transform: translateX(0.5rem);
  translate-y-2	transform: translateY(0.5rem);
  translate-x-2.5	transform: translateX(0.625rem);
  translate-y-2.5	transform: translateY(0.625rem);
  translate-x-3	transform: translateX(0.75rem);
  translate-y-3	transform: translateY(0.75rem);
  translate-x-3.5	transform: translateX(0.875rem);
  translate-y-3.5	transform: translateY(0.875rem);
  translate-x-4	transform: translateX(1rem);
  translate-y-4	transform: translateY(1rem);
  translate-x-5	transform: translateX(1.25rem);
  translate-y-5	transform: translateY(1.25rem);
  translate-x-6	transform: translateX(1.5rem);
  translate-y-6	transform: translateY(1.5rem);
  translate-x-7	transform: translateX(1.75rem);
  translate-y-7	transform: translateY(1.75rem);
  translate-x-8	transform: translateX(2rem);
  translate-y-8	transform: translateY(2rem);
  translate-x-9	transform: translateX(2.25rem);
  translate-y-9	transform: translateY(2.25rem);
  translate-x-10	transform: translateX(2.5rem);
  translate-y-10	transform: translateY(2.5rem);
  translate-x-11	transform: translateX(2.75rem);
  translate-y-11	transform: translateY(2.75rem);
  translate-x-12	transform: translateX(3rem);
  translate-y-12	transform: translateY(3rem);
  translate-x-14	transform: translateX(3.5rem);
  translate-y-14	transform: translateY(3.5rem);
  translate-x-16	transform: translateX(4rem);
  translate-y-16	transform: translateY(4rem);
  translate-x-20	transform: translateX(5rem);
  translate-y-20	transform: translateY(5rem);
  translate-x-24	transform: translateX(6rem);
  translate-y-24	transform: translateY(6rem);
  translate-x-28	transform: translateX(7rem);
  translate-y-28	transform: translateY(7rem);
  translate-x-32	transform: translateX(8rem);
  translate-y-32	transform: translateY(8rem);
  translate-x-36	transform: translateX(9rem);
  translate-y-36	transform: translateY(9rem);
  translate-x-40	transform: translateX(10rem);
  translate-y-40	transform: translateY(10rem);
  translate-x-44	transform: translateX(11rem);
  translate-y-44	transform: translateY(11rem);
  translate-x-48	transform: translateX(12rem);
  translate-y-48	transform: translateY(12rem);
  translate-x-52	transform: translateX(13rem);
  translate-y-52	transform: translateY(13rem);
  translate-x-56	transform: translateX(14rem);
  translate-y-56	transform: translateY(14rem);
  translate-x-60	transform: translateX(15rem);
  translate-y-60	transform: translateY(15rem);
  translate-x-64	transform: translateX(16rem);
  translate-y-64	transform: translateY(16rem);
  translate-x-72	transform: translateX(18rem);
  translate-y-72	transform: translateY(18rem);
  translate-x-80	transform: translateX(20rem);
  translate-y-80	transform: translateY(20rem);
  translate-x-96	transform: translateX(24rem);
  translate-y-96	transform: translateY(24rem);
  translate-x-1/2	transform: translateX(50%);
  translate-x-1/3	transform: translateX(33.333333%);
  translate-x-2/3	transform: translateX(66.666667%);
  translate-x-1/4	transform: translateX(25%);
  translate-x-2/4	transform: translateX(50%);
  translate-x-3/4	transform: translateX(75%);
  translate-x-full	transform: translateX(100%);
  translate-y-1/2	transform: translateY(50%);
  translate-y-1/3	transform: translateY(33.333333%);
  translate-y-2/3	transform: translateY(66.666667%);
  translate-y-1/4	transform: translateY(25%);
  translate-y-2/4	transform: translateY(50%);
  translate-y-3/4	transform: translateY(75%);
  translate-y-full	transform: translateY(100%);
-->

<!-- Skew
  skew-x-0	transform: skewX(0deg);
  skew-y-0	transform: skewY(0deg);
  skew-x-1	transform: skewX(1deg);
  skew-y-1	transform: skewY(1deg);
  skew-x-2	transform: skewX(2deg);
  skew-y-2	transform: skewY(2deg);
  skew-x-3	transform: skewX(3deg);
  skew-y-3	transform: skewY(3deg);
  skew-x-6	transform: skewX(6deg);
  skew-y-6	transform: skewY(6deg);
  skew-x-12	transform: skewX(12deg);
  skew-y-12	transform: skewY(12deg);
-->

<!-- Transform Origin
  origin-center	transform-origin: center;
  origin-top	transform-origin: top;
  origin-top-right	transform-origin: top right;
  origin-right	transform-origin: right;
  origin-bottom-right	transform-origin: bottom right;
  origin-bottom	transform-origin: bottom;
  origin-bottom-left	transform-origin: bottom left;
  origin-left	transform-origin: left;
  origin-top-left	transform-origin: top left;
-->
```

## Animation

```xml
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        theme: {
          extend: {
            animation: {
              'spin-slow': 'spin 3s linear infinite',
              wiggle: 'wiggle 1s ease-in-out infinite',
            },
            keyframes: {
              wiggle: {
                '0%, 100%': { transform: 'rotate(-12deg)' },
                '50%': { transform: 'rotate(12deg)' },
              },
            },
          },
        },
      }
    </script>
    <title>Animation</title>
  </head>
  <body>
    <div class="flex items-center justify-center min-h-screen bg-slate-900">
      <svg
        class="animate-wiggle w-48 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>
  </body>
</html>

<!-- Animate
animate-none	animation: none;

animate-spin	animation: spin 1s linear infinite;

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}


animate-ping	animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;

@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}


animate-pulse	animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .5;
  }
}


animate-bounce	animation: bounce 1s infinite;

@keyframes bounce {
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}
-->
```

## Customization

```javascript
tailwind.config = {
  theme: {
    screens: {
      sm: '550px',
      md: '800px',
      lg: '1200px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        primary: '#FF5733',
        secondary: '#FFFC33',
      },
      spacing: {
        5: '3.5rem',
      },
    },
  },
};
```
