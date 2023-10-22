function largestAltitude(gain: number[]): number {
  let highest = 0;
  let sum = 0;
  for (let value of gain) {
    sum = sum + value;
    if (sum > highest) {
      highest = sum;
    }
  }
  return highest;
}
