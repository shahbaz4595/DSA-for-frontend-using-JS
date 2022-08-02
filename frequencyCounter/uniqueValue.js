/* Implement a function which accepts a sorted array, and count the unique value in the array.
 There can be negative numbers in the array but it will always be sorted. */

const countUnique = arr => {
    const frequencyCounter = {};

    for (let val of arr) {
        frequencyCounter[val] = (frequencyCounter[val] || 0) + 1;
    }
    return keys(frequencyCounter);
}