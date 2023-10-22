function restoreString(s: string, indices: number[]): string {
  let arr: string[] = [];
  for (let i = 0; i < indices.length; i++) {
    arr[indices[i]] = s[i];
  }
  return arr.join('');
}
