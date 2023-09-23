/* 
    Difficulty: easy
    Solution Complexity: O(n)
*/

function containsDuplicate(nums: number[]): boolean {
  return new Set().size !== nums.length;
}
