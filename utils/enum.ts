export const isStringInEnum = <T extends { [key: string]: string }>(
  string: string,
  enumObject: T
) => {
  return Object.values(enumObject).includes(string);
};
