/**
 * 328. 奇偶链表
 * https://leetcode.cn/problems/odd-even-linked-list/
 * 
 * 相关标签：链表
 * 
 * 题目描述
 * 给定单链表的头节点 head ，将所有索引为奇数的节点和索引为偶数的节点分别组合在一起，然后返回重新排序的列表。
 * 第一个节点的索引被认为是 奇数 ， 第二个节点的索引为 偶数 ，以此类推。
 * 请注意，偶数组和奇数组内部的相对顺序应该与输入时保持一致。
 * 你必须在 O(1) 的额外空间复杂度和 O(n) 的时间复杂度下解决这个问题。
 * 
 * 示例 1:
 * 输入: head = [1,2,3,4,5]
 * 输出: [1,3,5,2,4]
 * 
 * 示例 2:
 * 输入: head = [2,1,3,5,6,4,7]
 * 输出: [2,3,6,7,1,5,4]
 * 
 * 提示:
 * n ==  链表中的节点数
 * 0 <= n <= 104
 * -106 <= Node.val <= 106
 * 
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 * */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {


    if (head == null) {
        return head
    }
    let isOdd = true;
    let oddHead = new ListNode()
    let oddTail = oddHead;
    let evenHead = new ListNode()
    let evenTail = evenHead;
    while (head != null) {
        if (isOdd) {
            oddTail.next = head;
            oddTail = oddTail.next;
        } else {
            evenTail.next = head;
            evenTail = evenTail.next;
        }
        head = head.next;
        isOdd = !isOdd;
    }
    // 将奇链表后面拼接上偶链表，并将偶链表的next设置为null
    oddTail.next = evenHead.next;
    evenTail.next = null;
    return oddHead.next;


    // if (head === null) {
    //     return head;
    // }
    // let evenHead = head.next;
    // let odd = head, even = evenHead;
    // while (even !== null && even.next !== null) {
    //     odd.next = even.next;
    //     odd = odd.next;
    //     even.next = odd.next;
    //     even = even.next;
    // }
    // odd.next = evenHead;
    // return head;
};