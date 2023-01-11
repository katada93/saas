export const compareString = (
  str1: string,
  str2: string,
  sort: 'asc' | 'desc',
) => {
  return sort === 'asc' ? str1.localeCompare(str2) : str2.localeCompare(str1);
};
