/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 *
 * LeetCode URL https://leetcode.com/problems/palindrome-linked-list/
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let list = [];
    while (head) {
        list.push(head.val);
        head = head.next;
    }
    const reversed = list.slice().reverse();
    for (let i = 0; i < list.length; i++) {
        if (list[i] != reversed[i]) {
            return false;
        }
    }
    return true;
};
