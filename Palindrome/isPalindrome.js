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
    const strLen = strX.length;

    if (strLen === 1) {
        return true;
    }

    for (let forwardIndex = 0; forwardIndex < Math.floor((strLen - 1) / 2); forwardIndex++) {
        for (let backIndex = strLen - 1; backIndex >= strLen / 2; backIndex--)
            if (strX[forwardIndex] != strX[backIndex]) {
                return false;
            }
    }

    return true;
};
