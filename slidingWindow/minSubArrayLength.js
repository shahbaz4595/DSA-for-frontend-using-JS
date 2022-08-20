/*
? Question: 
    ? Write a function called minSubArrayLen which accepts two parameters - an array of positive integers 
    ? and a positive integer.
    ? This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal 
    ? to the integer passed to the function. If there isn't one, return 0 instead.

* Sample Inputs:
    * minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
    * minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
    * minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
    * minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
    * minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
    * minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
    * minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0

! Approach:
    ! set the start and end of the window, initial total as 0 and minLength as Infinity
    ! run a loop while start of the window is less than the length of the array
    ! if current window doesn't add up to the given sum then move the window to right
    ! if current window adds up to at least the sum given then we can shrink the window 
    ! if current total is less than required total but we reach the end, break the loop or else we'll be in an infinite loop 
*/

const minSubArrayLen = (arr, num) => {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLength = Infinity;

    while (start < arr.length) {
        if (total < num && end < arr.length) {
            total = total + arr[end];
            end++;
        } else if (total >= num) {
            minLength = Math.min(Infinity, end - start);
            total = total - arr[start];
            start++;
        } else {
            break;
        }
    }
    return minLength === Infinity ? 0 : minLength;
}