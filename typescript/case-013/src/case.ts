type RecordValue = { names: string[] };
export function review_case_3(record: RecordValue): number {
  const names = record.names;
  names.push('archived');
  return record.names.length;
}
