/* Write a function, which accepts two arrays. The function should return true if every value in the array has 
it’s corresponding value squared in the second array. (Frequency should be same and the order doesn’t matter) */

const same = (arr1, arr2) => {

    if (arr1.length !== arr2.length) {
        return false;
    }
    const frequencyCounter1 = {};
    const frequencyCounter2 = {};

    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }

    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    for (let key in frequencyCounter1) {
        if (!(key**2 in frequencyCounter2)) {
            return false;
        }
        else if (frequencyCounter1[key] !== frequencyCounter2[key**2]){
            return false;
        }
    }
    return true;   
}