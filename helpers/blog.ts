import { BlogTag } from 'constants/blog';

export const parseBlogTagForLabel = (tag: BlogTag) => {
  switch (tag) {
    case BlogTag.Linux:
      return 'Linux';

    case BlogTag.MachineLearning:
      return 'Machine Learning';

    case BlogTag.Npm:
      return 'NPM';

    case BlogTag.Regex:
      return 'Regex';
  }
};
