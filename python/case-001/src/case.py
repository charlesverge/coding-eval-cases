def review_case_1(values: list[int]) -> int:
  local = list(values)
  local.append(4)
  return sum(values)
