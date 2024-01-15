import Script from 'next/script';

const GoogleAnalytics = () => {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-2YPHPR7ZDX"
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-2YPHPR7ZDX');
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
