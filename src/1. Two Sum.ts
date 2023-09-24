/* 
    Difficulty: easy
    Solution Complexity: O(n2)
*/

function twoSum(nums: number[], target: number): number[] {
  let arr: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        arr.push(i, j);
        break;
      }
    }
    if (arr.length > 0) break;
  }
  return arr;
}

let nums = [3, 2, 4];

console.log(twoSum(nums, 6));
