function isMonotonic(nums: number[]): boolean {
  let increasing = true;
  let decreasing = true;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i + 1]) {
      increasing = false;
    }

    if (nums[i] > nums[i - 1]) {
      decreasing = false;
    }
    if (!(increasing || decreasing)) {
      return false;
    }
  }

  return increasing || decreasing;
}

let numbers: number[] = [3, 1, 9];

console.log(isMonotonic(numbers));
