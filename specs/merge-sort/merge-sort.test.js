/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const mergeSort = (nums) => {
  // base case
  if (nums.length < 2) {
    return nums;
  }

  // Find middle point, and calculate first and second half
  const middle = Math.floor(nums.length / 2);

  const leftArray = nums.slice(0, middle);
  const rightArray = nums.slice(middle);

  // recursively merge left and right part

  return merge(mergeSort(leftArray), mergeSort(rightArray));
};

function merge(left, right) {
  // Array is sorted here

  const result = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return result.concat(left, right);
}

// unit tests
// do not modify the below code
test("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
