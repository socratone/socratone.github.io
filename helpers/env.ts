export const isProduction =
  process.env.NODE_ENV === 'production' &&
  typeof window !== 'undefined' &&
  window.location.origin.includes('socratone.github.io');
