/* 
? Question:
    ? Write a function, which accepts two arrays. The function should return true if every value in the array has
    ? it’s corresponding value squared in the second array. (Frequency should be same and the order doesn’t matter)

* Sample Inputs:
    * console.log(square([2,3,4], [9,4,16])) // true
    * console.log(square([2,3,4], [9,5,16])) // false
    * console.log(square([2,3,4], [9,4])) // false

! Approach:
    ! create two objects and iterate over the arrays to store the items in both the arrays to be stored in the corresponding objects with their ocurrences
    ! Iterate over an object key to check if all the square of the keys are present in the other object and the values are same or not
    ! Edge Case: Check the length of string at the first place, and return false if they are not same.
*/

const square = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;
    const numberObj = {}
    const squareObj = {}
    for (let item of arr1) {
        numberObj[item] = (numberObj[item] || 0) + 1; 
    }
    for (let item of arr2) {
        squareObj[item] = (squareObj[item] || 0) + 1;
    }
    for (let key in numberObj) {
        if (!(key**2 in squareObj)) return false
        else if (numberObj[key] !== squareObj[key**2]) return false;
    }
    return true;
}

