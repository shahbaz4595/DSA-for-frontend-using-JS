/*
? Question: 
    ? Write a function called findLongestSubstring, which accepts a string and returns the length of the 
    ? longest substring with all distinct characters.

* Sample Input:
    * findLongestSubstring('') // 0
    * findLongestSubstring('rithmschool') // 7
    * findLongestSubstring('thisisawesome') // 6
    * findLongestSubstring('thecatinthehat') // 7
    * findLongestSubstring('bbbbbb') // 1
    * findLongestSubstring('longestsubstring') // 8
    * findLongestSubstring('thisishowwedoit') // 6
*/

/* 
    ! Solution 1: Using string.includes
    ! Approach:
        ! start the window with 0, and loop through the string while the start is less than the length of the string.
        ! store the first char in a tempString and keep increasing the size of the window and keep appending the uniqiue char in the temp string and update the maxLength
        ! remove the first char from the tempString if the new char is present in the tempString
        ! return the maxLength at the end
*/

const findLongestSubstring = inputString => {
    let start = 0;
    let end = 0;
    let longestSubstringLength = 0;
    let tempString = "";

    if (!inputString) return 0;

    while (start < inputString.length) { 
        if (end >= inputString.length) {
            break;
        }
        if (!tempString || (tempString && !tempString.includes(inputString[end]))) {
            tempString += inputString[end];
            longestSubstringLength = Math.max(longestSubstringLength, tempString.length);
            end++;
        } else if (tempString && tempString.includes(inputString[end])) {

            start++;
            tempString = inputString.substring(start, end);
        }  
    }
    return longestSubstringLength;
}

console.log(findLongestSubstring('thisisawesome'))

/* 
    ! Solution 2: Using Object
    ! Approach:
        ! start the window with 0, and loop through the string while the start is less than the length of the string.
        ! store the first char in a seen object and keep appending the uniqiue char in the seen object with its index + 1 update the maxLength
        ! update the starting point to the value of the key in the seen object that matches with the new char
        ! return the maxLength at the end
*/

const longestSubstring = inpString => {
    let start = 0;
    let longestSubstringLength = 0;
    let seen = {};

    for (let i = 0; i < inpString.length; i++) {
        let char = inpString[i];
        console.log(seen)
        if (seen[char]) {
            start = Math.max(start, seen[char]);
        }
        longestSubstringLength = Math.max(longestSubstringLength, i - start + 1);
        seen[char] = i + 1;
    }
    return longestSubstringLength;
}