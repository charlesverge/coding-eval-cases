def review_case_7(record: dict[str, list[str]]) -> int:
  names = record['names']
  names.append('archived')
  return len(record['names'])
