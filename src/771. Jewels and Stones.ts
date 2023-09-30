/* 
    Difficulty: easy
    Solution Complexity: O(n)
*/

function numJewelsInStones(jewels: string, stones: string): number {
  let jewelsMap = new Set(jewels);
  let count = 0;
  for (let stone of stones) {
    if (jewelsMap.has(stone)) {
      count++;
    }
  }
  return count;
}
