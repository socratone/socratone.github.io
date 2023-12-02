export const convertMonthsToYearsAndMonths = (months: number) => {
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years > 0 && remainingMonths > 0) {
    return `${years}년 ${remainingMonths}개월`;
  } else if (years > 0) {
    return `${years}년`;
  }
  return `${remainingMonths}월`;
};
