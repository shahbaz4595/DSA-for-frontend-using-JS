/* Write a function that accepts a sorted array of integers. The function should find the first pair 
where the sum is 0. Return an array that includes both values or undefined if a pair does not exist. 

eg.
sumZero([-3,-2,-1,0,1,2,3])  // [-3,3]
sumZero([-2,0,1,3])  // undefined
sumZero([1,2,3]) // undefined
*/

const sumZero = arr => {
    let i = 0;
    let j = arr.length -1;
    
    while (i < j) {
        if (arr[i]+arr[j] > 0){
            j--
        }
        else if (arr[i]+arr[j]<0)
        {
            i++
        }
       else {
           return [arr[i], arr[j]];
       }
    }
}

