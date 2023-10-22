function validMountainArray(arr: number[]): boolean {
  //  no mounting tip
  if (arr.length < 3) return false;

  let tip: number = 0;

  for (let i = 0; i < arr.length; i++) {
    // no imperfections
    if (arr[i] === arr[i + 1]) return false;

    if (arr[i] > arr[i + 1]) {
      tip = i;
      break;
    }
  }

  // tip cant be start or end
  if (tip == 0 || tip == arr.length - 1) return false;

  for (let i = tip; i < arr.length; i++) {
    // second tip
    if (arr[i] <= arr[i + 1]) return false;
  }

  return true;
}
