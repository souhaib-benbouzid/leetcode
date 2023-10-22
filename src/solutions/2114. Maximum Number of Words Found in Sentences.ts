function mostWordsFound(sentences: string[]): number {
  let max = 0;
  for (let sentence of sentences) {
    let length = sentence.split(' ').length;
    if (max < length) max = length;
  }
  return max;
}
