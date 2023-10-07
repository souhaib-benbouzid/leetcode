/* 
    Difficulty: medium
    Space Complexity: O(n)
*/
function moveZeroesN2(nums: number[]): void {
  for (let i = 0; i < nums.length; i++) {
    for (let k = i; k < nums.length; k++) {
      if (nums[i] === 0 && nums[k] !== 0) {
        nums[i] = nums[k];
        nums[k] = 0;
      }
    }
  }
}

/* 
    Difficulty: medium
    Space Complexity: O(n)
*/
function moveZeroes(nums: number[]): void {
  let snowball = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      snowball++;
    } else if (snowball > 0) {
      nums[i - snowball] = nums[i];
      nums[i] = 0;
    }
  }
}
