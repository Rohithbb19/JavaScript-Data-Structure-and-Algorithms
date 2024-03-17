// best case O(n) - nearly sorted data
// average and worst case O(n^2)
function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    var currentNumber = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentNumber; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentNumber;
  }
  return arr;
}

const arr = [5, 9, 2, 0, -1];
console.log(insertionSort(arr));