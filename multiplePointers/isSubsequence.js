/*
? Question:
    ? Write a function called isSubsequence which takes in two strings and checks whether the characters 
    ? in the first string form a subsequence of the characters in the second string. In other words, the function 
    ? should check whether the characters in the first string appear somewhere in the second string, 
    ? without their order changing.

* Sample Inputs:
    * isSubsequence('hello', 'hello world'); // true
    * isSubsequence('sing', 'sting'); // true
    * isSubsequence('abc', 'abracadabra'); // true
    * isSubsequence('abc', 'acb'); // false (order matters)

! Approach:
    ! start two pointers from zero
    ! run a loop till the second pointer is less than the length of the second string
    ! Check if the characther at the first pointer of stringOne is same as the characther at the second pointer at string 2
    ! Increase the first pointer only if they are same else only increase the second pointer
    ! return true if the character at the first pointer which was same as the character at the second pointer and the first pointer was the last index of the first string
*/

const isSubsequence = (stringOne, stringTwo) => {
    let i = 0;
    let j = 0;
    if (!stringOne) return true;
    while (j <= stringTwo.length) {
        if (stringOne[i] === stringTwo[j]) i++;
        if (i === stringOne.length) return true;
        j++;
    }
    return false;
}