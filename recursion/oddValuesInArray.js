/*
? Question:
    ? Collect all the odd values in an array

* Sample Input:
    * console.log(oddValuesInArray([1,2,3,4,5,6])) // [1, 3, 5]
*/

const oddValuesInArray = arr => {
    const result = [];
    const helper = helperInput => {
        if (helperInput.length === 0) return;
        let value = helperInput[0];
        if (value % 2 !== 0) {
            result.push(value);
        }
        helper(helperInput.slice(1));
    }
    helper(arr);
    return result;
}