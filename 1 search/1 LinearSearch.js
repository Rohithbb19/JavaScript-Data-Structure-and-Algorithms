// best case O(1)
// average and worst case O(n)
// works on both sorted and not sorted data
function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (val == arr[i]) return i;
  }
  return -1;
}
console.log(linearSearch([1, 5, 4, 9, 7, 8, 2, 6, 4, 5, 4], 10));
