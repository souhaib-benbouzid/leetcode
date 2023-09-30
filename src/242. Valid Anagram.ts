/* 
    Difficulty: easy
    Solution Complexity: O(n)
*/

export function isAnagram(s: string, t: string): boolean {
  if (s.length != t.length) {
    return false;
  }

  let mapping1 = new Map();
  let mapping2 = new Map();

  for (let i = 0; i < s.length; i++) {
    if (mapping1.get(s[i]) != undefined) {
      mapping1.set(s[i], mapping1.get(s[i]) + 1);
    } else {
      mapping1.set(s[i], 1);
    }

    if (mapping2.get(t[i]) != undefined) {
      mapping2.set(t[i], mapping2.get(t[i]) + 1);
    } else {
      mapping2.set(t[i], 1);
    }
  }

  for (let [char, value] of mapping1.entries()) {
    if (mapping2.get(char) !== value) {
      return false;
    }
  }

  return true;
}
const s = 'a',
  t = 'ab';

console.log(isAnagram(s, t));
