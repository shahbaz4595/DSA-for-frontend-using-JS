/*
Question:
    Implement insertionSort function that takes an array and sorts it in ascending order.

Sample Input:
    insertionSort([2,4,1,12, 8]) // [1, 2, 4, 8, 12]

*/
const swap = (arr, i, j) => {
    return [arr[i], arr[j]] = [arr[j], arr[i]];
}

const insertionSort = arr => {
    if (arr.length === 0) return arr;
    for (let i = 1; i < arr.length; i++) {
        let currentValue = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
            arr[j + 1] = arr[j];          
        }
        arr[j + 1] = currentValue;
    }
    return arr;
}


