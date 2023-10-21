function isSubsequence(s: string, t: string): boolean {
  if (s === t) return true;
  let k = 0;
  for (let i = 0; i < t.length; i++) {
    if (s[k] === t[i]) {
      k++;
    }

    if (s.length === k) {
      return true;
    }
  }

  return false;
}
