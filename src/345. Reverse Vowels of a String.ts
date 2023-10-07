function reverseVowels(s: string): string {
  let vowels = new Set<string>([
    'a',
    'e',
    'i',
    'o',
    'u',
    'A',
    'E',
    'I',
    'O',
    'U',
  ]);
  let array = [];
  let stringArray = s.split('');
  for (let i = 0; i < s.length; i++) {
    if (vowels.has(s[i])) {
      array.push(i);
    }
  }

  for (let i = 0; i < array.length / 2; i++) {
    let temp = stringArray[array[i]];
    stringArray[array[i]] = stringArray[array[array.length - i - 1]];
    stringArray[array[array.length - i - 1]] = temp;
  }

  return stringArray.join('');
}

let s = 'leetcode';

console.log(reverseVowels(s));
