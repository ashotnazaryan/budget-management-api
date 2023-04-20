export const calculateAmountByField = (arr: any[], field: string): number => {
  return arr.length
    ? arr.reduce<number>((acc, curr) => {
      return acc + curr[field];
    }, 0)
    : 0;
};
