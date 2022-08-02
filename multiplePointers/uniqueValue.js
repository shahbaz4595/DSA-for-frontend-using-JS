/* Implement a function which accepts a sorted array, and count the unique value in the array.
 There can be negative numbers in the array but it will always be sorted. */

const countUnique = arr => {
    if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
      if (arr[i] !== arr[j]) {
          i++;
          arr[i] = arr[j];
      }
  }
  return i+1;
}