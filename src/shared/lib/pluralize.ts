export const pluralize = (count: number, one: string, two: string, five: string) => {
  const n = Math.abs(count) % 10;
  const n10 = Math.abs(count) % 100;

  if (n10 > 10 && n10 < 15) {
    return five
  }
  if (n === 1) {
    return one
  }
  if (n > 1 && n < 5) {
    return two
  }
  return five
}
