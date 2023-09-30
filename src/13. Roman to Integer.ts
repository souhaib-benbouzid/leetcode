/* 
    Difficulty: easy
    Solution Complexity: O(n)
*/

function romanToInt(s: string): number {
  const roman: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let numbers = s.split('').map((e) => roman[e]);

  return numbers.reduce(
    (acc, x, i) => (x < numbers[i + 1] ? acc - x : acc + x),
    0
  );
}
