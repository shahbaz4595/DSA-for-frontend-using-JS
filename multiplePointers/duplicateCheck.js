/*
? Question: 
    ? Implement a function called, areThereDuplicates which accepts a variable number of arguments, 
    ? and checks whether there are any duplicates among the arguments passed in.  

* Sample Inputs:
    * areThereDuplicates(1, 2, 3) // false
    * areThereDuplicates(1, 2, 2) // true 
    * areThereDuplicates('a', 'b', 'c', 'a') // true

! Approach: 
    ! accept the function arguments with rest operator to convert the args as array elements
    ! sort the array
    ! Take a pointer with index as 0
    ! Iterate over the sorted array with the second pointer starting from 1
    ! check if both the pointers are same, return true if they are else increase the first pointer by 1.
*/

const areThereDuplicates = (...args) => {
    const sortedArray = args.sort((a, b) => a > b);
    if (sortedArray.length === 0) return false;
    let i = 0;
    for (let j = 1; j < sortedArray.length; j++) {
        if (sortedArray[i] === sortedArray[j]) return true;
        i++;
    } return false;
}