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
    ! convert array to object and check the value (frequnecy) of all the keys in the object
    ! return true if the frequnecy is mor than 1
*/

const objectCreator = (arr) => {
    return arr.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }, {})
}

const areThereDuplicates = (...args) => {
    if (args.length === 0) return false;
    const frequencyCounter = objectCreator(args);
    for (let key in frequencyCounter) {
        if (frequencyCounter[key] > 1) return true;
    }
    return false;
}