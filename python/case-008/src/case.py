CACHE: list[str] = []

def review_case_8(value: str) -> int:
  CACHE.append(value)
  return len(CACHE)
