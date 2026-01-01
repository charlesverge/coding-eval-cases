const cache: string[] = [];
export function review_case_8(value: string): number {
  const later = () => cache.push(value);
  later();
  return cache.length;
}
