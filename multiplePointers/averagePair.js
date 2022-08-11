/*
? Question:
    ? Write a function called averagePair. Given a sorted array of integers and a target average, 
    ? determine if there is a pair of values in the array where the average of the pair equals the target average. 
    ? There may be more than one pair that matches the average target.
    ? Bonus Constraints: Time: O(N), Space: O(1)

* Sample Inputs:
    * averagePair([1,2,3,4,5], 3)

! Approach:
    ! Start a pointer from zero and the other pointer to the last index of the array
    ! Run a loop till the time first pointer is less than the second one
    ! take the average of the values present at both the index
    ! if the average is less than the target, increase the first pointer, else if average is larger then decrease the second pointer else return true
*/

const averagePair = (sortedArray, target) => {
    if (sortedArray.length === 0) return false;
    let i = 0;
    let j = sortedArray.length - 1;
    while (i < j) {
        const average = (sortedArray[i] + sortedArray[j]) / 2;
        if (average === target) return true;
        else if (average < target) i++;
        else j--;
    }
    return false;
}