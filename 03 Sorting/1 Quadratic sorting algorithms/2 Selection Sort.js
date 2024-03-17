// best case O(n) - nearly sorted data
// average and worst case O(n^2)
// used for space complicity
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let currentMinimum = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[currentMinimum] > arr[j]) currentMinimum = j;
    }
    if (i !== currentMinimum) {
      let temp = arr[currentMinimum];
      arr[currentMinimum] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
}
const arr = [5, 9, 2, 0, -1];
console.log(selectionSort(arr));