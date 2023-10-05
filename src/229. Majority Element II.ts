/* 
    Difficulty: medium
    Space Complexity: O(n)
*/

function majorityElement(nums: number[]): number[] {
  let n = Math.floor(nums.length / 3);
  let occurrences = new Map();
  let array = [];

  for (let i = 0; i < nums.length; i++) {
    if (occurrences.get(nums[i])) {
      occurrences.set(nums[i], occurrences.get(nums[i]) + 1);
    } else {
      occurrences.set(nums[i], 1);
    }
  }

  for (let [key, value] of occurrences) {
    if (value > n) {
      array.push(key);
    }
  }

  return array;
}

let other: number[] = [3, 2, 3];

console.log(majorityElement(other));
