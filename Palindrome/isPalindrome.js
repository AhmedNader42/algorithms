/**
 * @param {number} x
 * @return {boolean}
 * LeetCode URL https://leetcode.com/problems/palindrome-number/
 */

var isPalindrome = function (x) {
    if (x < 0) {
        return false;
    }

    const strX = x.toString();
    const reversedX = strX.split("").reverse().join("");
    for (let i = 0; i < strX.length; i++) {
        if (strX[i] !== reversedX[i]) {
            return false;
        }
    }

    return true;
};

console.log(isPalindrome(10) == false);
console.log(isPalindrome(1001) == true);
console.log(isPalindrome(0) == true);
console.log(isPalindrome(121) == true);
console.log(isPalindrome(-121) == false);

// 1001
//
// 1 > 0 > 0 > 1
// 1 > 0 > 0 > 1

// 123
// 1 > 2 > 3
// 3 > 2 > 1

// 12121
// 1 > 2 > 1 > 2 > 1
// 1 > 2 > 1 > 2 > 1
