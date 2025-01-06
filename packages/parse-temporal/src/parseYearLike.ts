export const parseYearLike = (yearLike: string): number => {
  const num = parseInt(yearLike);
  if (isNaN(num)) {
    throw new Error(`Invalid year: ${yearLike}`);
  }
  if (yearLike.length === 2) {
    return num + 2000;
  }
  return num;
};
