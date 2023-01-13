export const compare = (
  a: string | number,
  b: string | number,
  sort: 'asc' | 'desc',
) => {
  if (typeof a === 'string' && typeof b === 'string') {
    return sort === 'asc' ? a.localeCompare(b) : b.localeCompare(a);
  }

  if (typeof a === 'number' && typeof b === 'number') {
    return sort === 'asc' ? a - b : b - a;
  }

  return 0;
};

export const prepare = (obj: any) => {
  const { __v, updatedAt, _id: id, ...shorted } = obj;

  return { ...shorted, id };
};
