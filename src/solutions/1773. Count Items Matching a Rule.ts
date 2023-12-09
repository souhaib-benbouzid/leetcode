function countMatches(
  items: string[][],
  ruleKey: string,
  ruleValue: string
): number {
  let i = 0;
  let index: Record<string, number> = { type: 0, color: 1, name: 2 };

  for (let item of items) {
    if (item[index[ruleKey]] === ruleValue) i++;
  }
  return i;
}
