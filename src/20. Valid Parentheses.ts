/* 
    Difficulty: easy
    Solution Complexity: O(n)
*/

// Algorithm:
// string length should be even
// loop over string
// check if current item open tag push to stack, or if closing tag pop the stack
// check if the popped item matches current closing tag
// return false if no match
// stack.length === 0 at the end

function isValid(s: string): boolean {
  if (s.length % 2 !== 0) return false;
  const brackets = '()[]{}';
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    let currentTagIndex = brackets.indexOf(s[i]);
    if (currentTagIndex % 2 === 0) {
      stack.push(s[i]);
    } else {
      if (stack.pop() !== brackets[currentTagIndex - 1]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
