const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');
const dirTree = require('directory-tree');

const srcDir = path.join(__dirname, 'src');
const destDir = path.join(__dirname, 'build');

// build 폴더로 전체 복사
fse.copySync(srcDir, destDir, { overwrite: true }, function (err) {
  if (err) {
    console.error(err);
  } else {
    console.log('success!');
  }
});

// index.html 파일만 찾기
const tree = dirTree(destDir);

let htmls = [];

findIndexHTML(tree);

function findIndexHTML(tree) {
  function recursion(tree) {
    if (tree.name === 'index.html') {
      htmls.push({ path: tree.path, name: tree.name });
    }

    if (tree.children) {
      for (let i = 0; i < tree.children.length; i++) {
        recursion(tree.children[i]);
      }
    }
  }

  recursion(tree);
}

// console.log('htmls:', htmls)

// common html 파일 불러오기
const head = fs.readFileSync(
  path.join(__dirname, 'src/common/head.html'),
  'utf8'
);
const header = fs.readFileSync(
  path.join(__dirname, 'src/common/header.html'),
  'utf8'
);

// console.log('head:', head);
// console.log('header:', header);

// index.html 파일 텍스트 변환
htmls.forEach((indexHTML) => {
  let htmlText = fs.readFileSync(indexHTML.path, 'utf8');
  htmlText = htmlText.replace('<!-- head -->', head);
  htmlText = htmlText.replace('<!-- header -->', header);

  fs.writeFile(indexHTML.path, htmlText, function (err) {
    if (err) return console.log(err);
  });
});

