export function review_case_1(values: number[]): number {
  const local = [...values];
  local.push(4);
  return values.length;
}
