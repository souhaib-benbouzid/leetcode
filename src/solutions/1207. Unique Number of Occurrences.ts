function uniqueOccurrences(arr: number[]): boolean {
  let occurrences = new Map();
  for (let i = 0; i < arr.length; i++) {
    occurrences.set(
      arr[i],
      occurrences.get(arr[i]) ? occurrences.get(arr[i]) + 1 : 1
    );
  }

  let set = new Set(occurrences.values());

  return set.size === occurrences.size;
}
