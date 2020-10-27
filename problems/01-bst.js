class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    // Initialize an empty binary search tree
    constructor() {
        this.root = null;
    }

    // Insert a node into the binary search tree
    insert(val, currentNode = this.root) {
        let newNode = new TreeNode(val);
        if (!this.root) {
            this.root = newNode;
            return;
        }

        if (val < currentNode.val) {
            if (!currentNode.left) {
                currentNode.left = newNode;
            } else {
                this.insert(val, currentNode.left);
            }
        } else {
            if (!currentNode.right) {
                currentNode.right = newNode;
            } else {
                this.insert(val, currentNode.right);
            }
        }
    }

    // Perform a recursive search through the binary search tree
    searchRecur(val, currentNode = this.root) {
        if (!this.root) return false
        if (val !== currentNode.val) {
            if (currentNode.left) {
                this.searchRecur(val, currentNode.left)
            }
            if (currentNode.right) {
                this.searchRecur(val, currentNode.right)
            } else {
                return false
            }
        } else {
            return true
        }
    }

    // Perform an iterative search through the binary search tree
    searchIter(val) {
        if (!this.root) return false

        //     let queue = [root]
        //     let vals = []
        //     while (queue.length) {
        //         let node = queue.shift()
        //         vals.push(node.val)
        //         if (node.left) {
        //             queue.push(node.left)
        //         }
        //         if (node.right) {
        //             queue.push(node.right)
        //         }

        //     }
        //     return vals
    }
}

module.exports = {
    TreeNode,
    BST
};
