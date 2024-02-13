import { BlogTag } from 'constants/blog';

export const convertBlogTagForLabel = (tag: BlogTag) => {
  switch (tag) {
    case BlogTag.Linux:
      return 'Linux';

    case BlogTag.MachineLearning:
      return 'Machine Learning';

    case BlogTag.Npm:
      return 'NPM';

    case BlogTag.Regex:
      return 'Regex';

    case BlogTag.Docker:
      return 'Docker';

    case BlogTag.NextJs:
      return 'NextJS';

    case BlogTag.Python:
      return 'Python';

    case BlogTag.Browser:
      return 'Browser';

    case BlogTag.Sql:
      return 'SQL';

    case BlogTag.Webpack:
      return 'Webpack';

    case BlogTag.BrowserApi:
      return 'Browser API';

    case BlogTag.Apache:
      return 'Apache';

    case BlogTag.Aws:
      return 'AWS';

    case BlogTag.Git:
      return 'Git';
  }
};
