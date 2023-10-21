// O(N)
function findMaxAverage(nums: number[], k: number): number {
  let windowSum: number = 0;
  let max: number;
  for (let i = 0; i < k; i++) {
    windowSum = windowSum + nums[i];
  }
  max = windowSum / k;

  for (let i = 0; i < nums.length - k; i++) {
    windowSum = windowSum - nums[i] + nums[i + k];
    max = Math.max(max, windowSum / k);
  }

  return max;
}

// O(N2)
function findMaxAverageN2(nums: number[], k: number): number {
  let sums: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = 0; j < k; j++) {
      sum = (sum + nums[i + j]) / k;
    }
    sums.push(sum);
  }

  return Math.max(...sums);
}
