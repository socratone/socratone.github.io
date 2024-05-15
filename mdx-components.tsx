import type { MDXComponents } from 'mdx/types';

/**
 * Add a mdx-components.tsx file
 * https://nextjs.org/docs/app/building-your-application/configuring/mdx#add-a-mdx-componentstsx-file
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  };
}
