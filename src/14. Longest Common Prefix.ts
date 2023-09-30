/* 
    Difficulty: easy
    time Complexity: O(n∗m)
    Space complexity:O(n∗m)
*/

function longestCommonPrefix(strs: string[]): string {
  // assume the first word is a base and all a prefix
  let base = strs[0];
  let smallestIndex = base.length;

  // check all the strings other than base string
  for (let i = 1; i < strs.length; i++) {
    // match charchters
    for (let j = 0; j < base.length; j++) {
      // record the new index where you have no match

      if (base[j] !== strs[i][j] && j < smallestIndex) {
        smallestIndex = j;
      }
    }
  }

  return base.slice(0, smallestIndex);
}
