/* 
? Question:
    ? Write a function which accepts an array of integers and a number called n. 
    ? The function should calculate the maximum sum of n consecutive elements in the array. 

* Sample Input:
    * maxSubArraySum([1,2,5,2,8,1,5],2)  ==> 10
    * maxSubArraySum([1,2,5,2,8,1,5],4) ==> 17
    * maxSubArraySum([4,2,1,6],1) ==> 6
    * maxSubArraySum([4,2,1,6,2],4) ==> 13
    * maxSubArraySum([],4) ==> null

! Approach: 
    ! initialize a variable to store the maximum sum.
    ! take the initial subarray with length as as passed in the function argument
    ! iterate and store the sum of the elements in the maxSum as well as a temp variable.
    ! take the rest of the array and iterate over it to add it to the temp and remove the inital value so that the length of consecutive numbers is maintained.
    ! compare the temp with maxSum and assign the biggest value to the maxSum
    ! finally return maxSum

*/


const maxSubArray = (arr, num) => {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;

    for (let i=0; i<num; i++){
        maxSum = maxSum+ arr[i];
    }
    tempSum = maxSum;
    for (let i=num; i<arr.length; i++){
        tempSum = tempSum + arr[i] - arr[i - num];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}