function findDifference(nums1: number[], nums2: number[]): number[][] {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);
  let unique1: number[] = [];
  let unique2: number[] = [];

  set1.forEach((elm) => {
    if (!set2.has(elm)) {
      unique1.push(elm);
    }
  });

  set2.forEach((elm) => {
    if (!set1.has(elm)) {
      unique2.push(elm);
    }
  });

  return [unique1, unique2];
}
