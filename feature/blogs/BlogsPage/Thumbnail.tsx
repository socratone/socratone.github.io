/* eslint-disable @next/next/no-img-element */
import styled from '@emotion/styled';
import type { BlogThumbnail, LifehackThumbnail } from 'constants/blog';

type ThumbnailProps = {
  type: 'blog' | 'lifehack';
  name: BlogThumbnail | LifehackThumbnail;
};

const StyledImage = styled.img`
  display: block;
  border-radius: 8px;
  width: 96px;
  height: 96px;
  object-fit: contain;
`;

const Thumbnail: React.FC<ThumbnailProps> = ({ type, name }) => {
  switch (type) {
    case 'blog':
      return (
        <StyledImage
          srcSet={`/images/blog/thumbnail/${name}-96w.webp, /images/blog/thumbnail/${name}-192w.webp 2x`}
          src={`/images/blog/thumbnail/${name}-192w.webp`}
          alt={name}
        />
      );

    case 'lifehack':
      return (
        <StyledImage
          srcSet={`/images/lifehack/thumbnail/${name}-96w.webp, /images/lifehack/thumbnail/${name}-192w.webp 2x`}
          src={`/images/lifehack/thumbnail/${name}-192w.webp`}
          alt={name}
        />
      );
  }
};

export default Thumbnail;
