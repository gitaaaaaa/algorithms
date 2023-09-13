/**
 * 257. 二叉树的所有路径
 * https://leetcode.cn/problems/binary-tree-paths/description/
 * 
 * 相关标签：树 深度优先搜索 字符串 回溯 二叉树
 * 给你一个二叉树的根节点 root ，按 任意顺序 ，返回所有从根节点到叶子节点的路径。
 * 叶子节点 是指没有子节点的节点。
 * 
 * 示例 1：
 * 输入：root = [1,2,3,null,5]
 * 输出：["1->2->5","1->3"]
 * 
 * 示例 2：
 * 输入：root = [1]
 * 输出：["1"]
 * 
 * 提示：
 * 树中节点的数目在范围 [1, 100] 内
 * -100 <= Node.val <= 100
 * */ 

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
// 方法一：深度优先搜索
var binaryTreePaths = function(root) {
    let paths = []
    function deconstructionTree (root, path) {
        if(root) {
            path += root.val.toString();
            if(root.left === null && root.right === null) {
                paths.push(path)
            } else {
                path+= '->'
                deconstructionTree(root.left, path)
                deconstructionTree(root.right, path)
            }
        }
    }

    deconstructionTree(root, "")
    return paths
};

// 方法二：广度优先搜索 队列**先入[push]先出[unshift]**
var binaryTreePaths = function(root) {
    const paths = [];
    if (root === null) {
        return paths;
    }
    const node_queue = [root];
    const path_queue = [root.val.toString()];

    while (node_queue.length) {
        const node = node_queue.shift(); 
        const path = path_queue.shift();

        if (node.left === null && node.right === null) {
            paths.push(path);
        } else {
            if (node.left !== null) {
                node_queue.push(node.left);
                path_queue.push(path + "->" + node.left.val.toString());
            }

            if (node.right !== null) {
                node_queue.push(node.right);
                path_queue.push(path + "->" + node.right.val.toString());
            }
        }
    }
    return paths;
};


module.exports = binaryTreePaths