/*
? Question: 
    ? Implement a function which accepts a sorted array, and count the unique value in the array.
    ? There can be negative numbers in the array but it will always be sorted. 

* Sample Inputs:
    * countUnique[1,1,2,4,4,5] => 4

! Approach: 
    ! take a pointer for the value at the 0th index.
    ! Iterate over the array starting with the second value of the array.
    ! Compare both the pointers, no need to do anything as if they are same because the second pointer anyway increasing.
    ! Increate the pointer i if they are not same and store the vlaue of pointer j.
    ! Continue this process for all the elements of the array and finally the number of unique value would be pointer + 1 
*/ 


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

console.log(uniqueArray([1,2,2,3,3,4,4]));