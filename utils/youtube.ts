export const getYouTubeVideoId = (url: string) => {
  const urlObj = new URL(url);
  const hostname = urlObj.hostname;

  if (hostname === 'youtu.be') {
    return urlObj.pathname.slice(1);
  }

  if (hostname === 'www.youtube.com' || hostname === 'youtube.com') {
    if (urlObj.pathname === '/watch') {
      const result = urlObj.searchParams.get('v');
      if (!result) throw new Error('v param has no value.');
      return result;
    } else if (urlObj.pathname.startsWith('/embed/')) {
      return urlObj.pathname.split('/')[2];
    } else if (urlObj.pathname.startsWith('/v/')) {
      return urlObj.pathname.split('/')[2];
    }
  }

  throw new Error('Unable to determine the videoId.');
};
