/**
 * Difficulty: easy
 * Solution Complexity: O(n)
 */

function finalValueAfterOperations(operations: string[]): number {
  let x = 0;
  let validOperations: Record<string, number> = {
    'X++': 1,
    '++X': 1,
    '--X': -1,
    'X--': -1,
  };
  for (let operation of operations) {
    if (validOperations[operation]) {
      x = x + validOperations[operation];
    }
  }

  return x;
}
