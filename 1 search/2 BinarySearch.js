// best case O(1)
// average worst case O(log n)
// works on both sorted and not sorted data
function binarySearch(arr, val) {
  let min = 0;
  let max = arr.length - 1;
  let middle = Math.floor((min + max) / 2);
  while (val !== arr[middle] && min <= max) {
    if (arr[middle] < val) min = middle + 1;
    else max = middle - 1;
    middle = Math.floor((min + max) / 2);
  }
  return val === arr[middle] ? middle : -1;
}

console.log(binarySearch([1, 5, 9, 10, 15, 18, 26, 29, 31, 37], 29));
