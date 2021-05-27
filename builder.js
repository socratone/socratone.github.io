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

// common html 파일 불러오기
const head = fs.readFileSync(
  path.join(__dirname, 'src/common/head.html'),
  'utf8'
);

const header = fs.readFileSync(
  path.join(__dirname, 'src/common/header.html'),
  'utf8'
);

// index.html 파일에 common html 파일 적용 후 저장
htmls.forEach((indexHTML) => {
  let htmlText = fs.readFileSync(indexHTML.path, 'utf8');
  htmlText = htmlText.replace('<!-- head -->', head); // 해당 주석을 head로 대체
  htmlText = htmlText.replace('<!-- header -->', header); // 해당 주석을 header로 대체

  fs.writeFileSync(indexHTML.path, htmlText, function (err) {
    if (err) return console.log(err);
  });
});

// build 폴더에서 루트로 이동
tree.children.map((item) => {
  fse.moveSync(item.path, path.join(__dirname, item.name), { overwrite: true });
});

// build, common 폴더 삭제
fs.rmdirSync(path.join(__dirname, 'build')); // 비어 있는 경우에만 삭제됨
fse.removeSync(path.join(__dirname, 'common')); // 무조건 삭제됨
