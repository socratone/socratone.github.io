const fs = require('fs');
const path = require('path');
const builder = require('xmlbuilder');

const BASE_URL = 'https://socratone.github.io';

/** 첫 번째 arg를 불러온다. */
const getOutPathArgument = () => {
  let outPath = null;

  /** node something.js 뒤에 추가적으로 입력된 string을 가져온다. */
  process.argv.forEach((value, index) => {
    if (index === 2) {
      outPath = value;
    }
  });

  if (!outPath) {
    throw new Error('Out path is not defined.');
  }

  return outPath;
};

const getFilesInFolder = folderPath => {
  return fs.readdirSync(folderPath);
};

const getBlogUrls = () => {
  const folderPath = '/content/blogs';
  const fullPath = path.join(process.cwd(), folderPath);

  const fileNames = getFilesInFolder(fullPath);
  const fileNamesWithoutExtension = fileNames.map(fileName =>
    fileName.substring(0, fileName.length - 3)
  );
  const urls = fileNamesWithoutExtension.map(
    fileName => BASE_URL + '/blogs/' + fileName
  );
  return urls;
};

const getCurrentDate = () => {
  const addZero = num => {
    return num < 10 ? '0' + num : num;
  };

  const currentDate = new Date();

  /** 날짜를 'YYYY-MM-DD' 형식으로 format */
  const formattedDate =
    currentDate.getFullYear() +
    '-' +
    addZero(currentDate.getMonth() + 1) +
    '-' +
    addZero(currentDate.getDate());

  return formattedDate;
};

const createSiteMapXml = (urls, outPath) => {
  const currentDate = getCurrentDate();

  const root = builder.create({
    urlset: {
      '@xmlns': 'http://www.sitemaps.org/schemas/sitemap/0.9',
    },
  });

  /** url 항목 추가 */
  urls.forEach(url => {
    root.ele({
      url: {
        loc: { '#text': url },
        lastmod: { '#text': currentDate },
      },
    });
  });

  const xml = root.end({ pretty: true });

  const filePath = `${outPath}/sitemap.xml`;
  const fullPath = path.join(process.cwd(), filePath);

  fs.writeFileSync(fullPath, xml, 'utf-8');
};

const getAdditionalUrls = () => {
  const additionalPathnames = ['', '/blogs'];
  return additionalPathnames.map(pathname => BASE_URL + pathname);
};

const main = () => {
  const urls = [...getBlogUrls(), ...getAdditionalUrls()];

  const outPath = getOutPathArgument();
  createSiteMapXml(urls, outPath);
  console.log('sitemap.xml was created.');
};

main();
