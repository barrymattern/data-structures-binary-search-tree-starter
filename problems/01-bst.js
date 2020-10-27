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
    insert(val, currentNode=this.root) {
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
    searchRecur(val, currentNode=this.root) {
        // Your code here
    }

    // Perform an iterative search through the binary search tree
    searchIter(val) {
        // Your code here
    }
}

module.exports = {
    TreeNode,
    BST
};