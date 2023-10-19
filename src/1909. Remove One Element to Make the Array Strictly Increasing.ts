function canBeIncreasing(nums: number[]): boolean {
  let count = 0;
  let index = -1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] >= nums[i]) {
      count++;
      index = i;
    }
  }

  if (count > 1) return false;
  if (count == 0) return true;
  if (index == nums.length - 1 || index == 1) return true;
  if (nums[index - 1] < nums[index + 1]) return true;
  if (nums[index - 2] < nums[index]) return true;

  return false;
}
