function decompressRLElist(nums: number[]): number[] {
  let arr = [];
  for (let i = 0; i < nums.length; i = i + 2) {
    for (let j = 0; j < nums[i]; j++) {
      arr.push(nums[i + 1]);
    }
  }
  return arr;
}
