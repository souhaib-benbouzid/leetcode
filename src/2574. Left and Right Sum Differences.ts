function leftRightDifference(nums: number[]): number[] {
  let j = nums.length - 1;
  let rightSum = 0;
  let leftSum = 0;
  let arr = [];
  let leftarr = [0];
  let rightarr = [0];

  for (let i = 0; i < nums.length - 1; i++) {
    leftSum = leftSum + nums[i];
    rightSum = rightSum + nums[j];
    j--;
    leftarr.push(leftSum);
    rightarr.push(rightSum);
  }

  for (let i = 0; i < nums.length; i++) {
    arr.push(Math.abs(leftarr[i] - rightarr[nums.length - 1 - i]));
  }

  return arr;
}
