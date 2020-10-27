
// Write a function that takes in the root of a
// binary search tree and returns the minimum value.
// You may use your BST implementation to test this out.
function findMin(root) {
  if (!root) return null;

  if (!root.left && !root.right) return root;
  if (!root.left && root.right) return root;

  return findMin(root.left);

}


module.exports = {
  findMin
};
