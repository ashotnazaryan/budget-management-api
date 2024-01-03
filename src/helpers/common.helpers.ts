export const calculateAmountByField = (arr: any[], field: string): number => {
  return arr.length
    ? arr.reduce<number>((acc, curr) => {
      return acc + curr[field];
    }, 0)
    : 0;
};

export const isNewDate = (date: string) => {
  const comparableDate = new Date(date);
  const currentDate = new Date();

  return currentDate.getFullYear() !== comparableDate.getFullYear()
    || currentDate.getMonth() !== comparableDate.getMonth()
    || currentDate.getDate() !== comparableDate.getDate();
};

export const isNewMonth = (date: string) => {
  const comparableDate = new Date(date);
  const previousMonthDate = new Date();

  previousMonthDate.setMonth(previousMonthDate.getMonth() - 1);

  return comparableDate.getFullYear() !== previousMonthDate.getFullYear()
    || comparableDate.getMonth() !== previousMonthDate.getMonth();
};
