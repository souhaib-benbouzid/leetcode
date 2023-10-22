/* 
    Difficulty: easy
    Solution Complexity: O(n)
*/

function isPalindrome(x: number): boolean {
  if (x < 0) return false;
  let stringNumber = x.toString();
  let midIndex = (stringNumber.length + 1) / 2;
  let j = stringNumber.length - 1;
  for (let i = 0; i <= midIndex; i++) {
    if (stringNumber[i] !== stringNumber[j]) {
      return false;
    }
    j--;
  }

  return true;
}

let x = 1000030001;
console.log(isPalindrome(x));
