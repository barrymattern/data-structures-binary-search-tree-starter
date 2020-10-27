// Write a function that takes in the root of a
// binary search tree and returns the height.
// You may use your BST implementation to test this out.
function getHeight(root) {
  if (!root) return -1
  let leftGetter = getHeight(root.left) + 1
  let rightGetter = getHeight(root.right) + 1

  console.log(leftGetter)
  console.log(rightGetter)

  if (leftGetter >= rightGetter) {
    return leftGetter
  } else {
    return rightGetter
  }

}



module.exports = {
  getHeight
};
