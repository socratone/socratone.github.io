/* eslint-disable @next/next/no-img-element */
import type { BlogThumbnail, LifehackThumbnail } from 'constants/blog';

type ThumbnailProps = {
  type: 'blogs' | 'lifehacks';
  name: BlogThumbnail | LifehackThumbnail;
};

const Thumbnail: React.FC<ThumbnailProps> = ({ type, name }) => {
  switch (type) {
    case 'blogs':
      return (
        <img
          srcSet={`/images/blog/thumbnail/${name}-96w.webp, /images/blog/thumbnail/${name}-192w.webp 2x`}
          src={`/images/blog/thumbnail/${name}-192w.webp`}
          alt={name}
        />
      );

    case 'lifehacks':
      return (
        <img
          srcSet={`/images/lifehack/thumbnail/${name}-96w.webp, /images/lifehack/thumbnail/${name}-192w.webp 2x`}
          src={`/images/lifehack/thumbnail/${name}-192w.webp`}
          alt={name}
        />
      );
  }
};

export default Thumbnail;
