CACHE: list[str] = []

def review_case_4(value: str) -> int:
  CACHE.append(value)
  return len(CACHE)
