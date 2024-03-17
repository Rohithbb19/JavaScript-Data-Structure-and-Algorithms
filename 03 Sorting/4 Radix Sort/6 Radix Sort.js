function getLast(num, siz) {
  return Math.floor(Math.abs(num) / Math.pow(10, siz)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function MaxDigit(num) {
  let maxDigit = 0;
  for (let i = 0; i < num.length; i++) {
    maxDigit = Math.max(maxDigit, digitCount(num[i]));
  }
  return maxDigit;
}

function RadixSort(nums) {
  let maxCount = MaxDigit(nums);
  for (let i = 0; i < maxCount; i++) {
    let digitBucket = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < nums.length; j++) {
      let digit = getLast(nums[j], i);
      digitBucket[digit].push(nums[j]);
    }
    nums = [].concat(...digitBucket);
  }
  return nums;
}

console.log(RadixSort([5156, 6516164, 15165161, 595, 6254, 2562592, 515, 5]));
