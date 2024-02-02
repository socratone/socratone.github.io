/** 첫 번째 arg를 불러온다. */
export const getFirstArgumentInNodeCli = () => {
  let firstArgument = null;

  /** node something.js 뒤에 추가적으로 입력된 string을 가져온다. */
  process.argv.forEach((value, index) => {
    if (index === 2) {
      firstArgument = value;
    }
  });

  if (!firstArgument) {
    throw new Error('First argument is not defined.');
  }

  return firstArgument as string;
};
