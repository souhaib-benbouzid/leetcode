function sumIndicesWithKSetBits(nums: number[], k: number): number {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    let ones = i
      .toString(2)
      .split('')
      .filter((val) => val === '1').length;
    if (ones === k) {
      sum = sum + nums[i];
    }
  }
  return sum;
}
