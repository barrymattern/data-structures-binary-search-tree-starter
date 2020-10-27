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
    insert(val, tumor = this.root) {
        let newNode = new TreeNode(val);
        if (!this.root) {
            this.root = newNode;
            return;
        }

        if (val < tumor.val) {
            if (!tumor.left) {
                tumor.left = newNode;
            } else {
                this.insert(val, tumor.left);
            }
        } else {
            if (!tumor.right) {
                tumor.right = newNode;
            } else {
                this.insert(val, tumor.right);
            }
        }
    }

    // Perform a recursive search through the binary search tree
    searchRecur(val, tumor = this.root) {
        if (!tumor) return false;
        if (val === tumor.val) return true;
        if (val !== tumor.val) {
            if (tumor.left) {
                return this.searchRecur(val, tumor.left)
            }
            if (tumor.right) {
                return this.searchRecur(val, tumor.right)
            }
            return false;
        }
    }

    // Perform an iterative search through the binary search tree
    searchIter(val) {
        if (!this.root) return false
        let tumor = this.root

        while (tumor) {
            if (val < tumor.val) {
                tumor = tumor.left
            } else if (val > tumor.val) {
                tumor = tumor.right
            } else {
                return true
            }
        }
        return false
    }
}

module.exports = {
    TreeNode,
    BST
};
