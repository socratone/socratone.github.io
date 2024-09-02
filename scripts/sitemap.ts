import { getFirstArgumentInNodeCli } from '../utils/node';

import fs from 'fs';
import path from 'path';
import builder from 'xmlbuilder';

const BASE_URL = 'https://socratone.github.io';

const getFilesInFolder = (folderPath: string) => {
  return fs.readdirSync(folderPath);
};

const getBlogUrls = (folderName: string) => {
  const folderPath = `/content/${folderName}`;
  const fullPath = path.join(process.cwd(), folderPath);

  const fileNames = getFilesInFolder(fullPath);
  const fileNamesWithoutExtension = fileNames.map(fileName =>
    fileName.substring(0, fileName.length - 3)
  );
  const urls = fileNamesWithoutExtension.map(
    fileName => `${BASE_URL}/${folderName}/${fileName}`
  );
  return urls;
};

const getCurrentDate = () => {
  const addZero = (num: number) => {
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

const createSiteMapXml = (urls: string[], outPath: string) => {
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
  const additionalPathnames = ['', '/blogs', '/lifehacks'];
  return additionalPathnames.map(pathname => BASE_URL + pathname);
};

const main = () => {
  const urls = [
    ...getBlogUrls('blogs'),
    ...getBlogUrls('lifehacks'),
    ...getBlogUrls('doctrines'),
    ...getAdditionalUrls(),
  ];

  const outPath = getFirstArgumentInNodeCli();
  createSiteMapXml(urls, outPath);
};

main();
