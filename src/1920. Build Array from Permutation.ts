function buildArray(nums: number[]): number[] {
  let array = [];
  for (let i = 0; i < nums.length; i++) {
    array[i] = nums[nums[i]];
  }
  return array;
}
