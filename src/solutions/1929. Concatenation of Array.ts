function getConcatenation(nums: number[]): number[] {
  let array = [];
  for (let i = 0; i < nums.length; i++) {
    array[i] = nums[i];
    array[i + nums.length] = nums[i];
  }
  return array;
}
