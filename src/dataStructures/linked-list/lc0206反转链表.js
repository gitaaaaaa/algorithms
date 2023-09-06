/**
 * 206. 反转链表
 * https://leetcode.cn/problems/reverse-linked-list/description/?envType=study-plan-v2&envId=huawei-2023-fall-sprint
 * 相关标签：递归 链表
 * 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
 * 
 * 示例一
 * 输入：head = [1,2,3,4,5]
 * 1->2->3->4->5
 * 输出：head = [5,4,3,2,1]
 * 5->4->3->2->1
 * 
 * 示例二
 * 输入：head = [1,2]
 * 输出：[2,1]
 * 
 * 示例 3：
 * 输入：head = []
 * 输出：[]
 * 
 * 提示：
 * 链表中节点的数目范围是 [0, 5000]
 * -5000 <= Node.val <= 5000
 * 进阶：链表可以选用迭代或递归方式完成反转。你能否用两种方法解决这道题？
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
var reverseList = function (head) {
    console.log('head---',head)
       let [prev, val] = [null, head]
       while(val) {
            let temp = val.next;
            val.next = prev;
            prev= val;
            val = temp
       }
       const reversedArray = linkedListToArray(prev);
       return reversedArray
};

// 辅助函数：将链表转换为数组
function linkedListToArray(linkedList) {
    const result = [];
    let current = linkedList;
    while (current) {
      result.push(current.val);
      current = current.next;
    }
    return result;
}

module.exports = reverseList