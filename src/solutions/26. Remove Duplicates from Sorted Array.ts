/* 
    Difficulty: easy
    Solution Complexity: O(n)
*/

function removeDuplicates(numbers: number[]): number {
  let uniqueNumbersIndex = 1;
  for (let i = 1; i < numbers.length; i++) {
    // find unique numbers
    if (numbers[i - 1] !== numbers[i]) {
      numbers[uniqueNumbersIndex] = numbers[i];
      uniqueNumbersIndex++;
    }
  }
  return uniqueNumbersIndex;
}
