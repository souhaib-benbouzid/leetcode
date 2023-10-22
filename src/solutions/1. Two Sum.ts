/* 
    Difficulty: easy
    Solution Complexity: O(n)
*/

// O(n2)
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

// O(n)
function fastTwoSum(nums: number[], target: number): number[] {
  // diff -> index
  const differenceMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    console.log(differenceMap);
    // number in diffMap ?
    if (differenceMap.get(target - nums[i]) !== undefined) {
      return [differenceMap.get(target - nums[i]), i];
    } else {
      // add diff to Map
      differenceMap.set(nums[i], i);
    }
  }

  return [];
}

let nums = [3, 2, 4];

console.log(fastTwoSum(nums, 6));
console.log(twoSum(nums, 6));
