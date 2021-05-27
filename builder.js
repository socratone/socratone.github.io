const fse = require('fs-extra');
const path = require('path');
const dirTree = require('directory-tree');

const srcDir = path.join(__dirname, 'src');
const destDir = path.join(__dirname, 'build');

// build 폴더로 전체 복사
// fse.copySync(srcDir, destDir, { overwrite: true }, function (err) {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log('success!');
//   }
// });

// index.html 파일만 찾기

const tree = dirTree(srcDir);
// console.log(tree);

let htmls = [];

findHTML(tree)

function findHTML(tree) {
  function recursion(tree) {
    if (tree.name === 'index.html') {
      htmls.push({ path: tree.path, name: tree.name })
    }

    if (tree.children) {
      for (let i = 0; i < tree.children.length; i++) {
        recursion(tree.children[i])
      }
    }
  }

  recursion(tree)
}

console.log('htmls:', htmls)