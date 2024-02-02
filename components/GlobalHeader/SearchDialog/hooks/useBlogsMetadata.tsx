import { useEffect, useState } from 'react';

import type { BlogMetadata } from '../types';

const useBlogsMetadata = (enabled: boolean) => {
  const [blogsMetadata, setBlogsMetadata] = useState<
    BlogMetadata[] | null | undefined
  >();

  useEffect(() => {
    if (enabled && blogsMetadata === undefined) {
      import('generated/blogs-metadata.json')
        .then(({ default: data }) => {
          setBlogsMetadata(data as BlogMetadata[]);
        })
        .catch(() => {
          setBlogsMetadata(null);
        });
    }
  }, [enabled, blogsMetadata]);

  return blogsMetadata;
};

export default useBlogsMetadata;
