

// validate subsequence
const isSubequence = (arr, seq) => {
    let index = 0
    for(let i = 0; i < arr.length; i++) {
        if(index === seq.length) {
            break
        } 
        if(arr[i] === seq[index] && index < seq.length) {
            index++
        }
    }
    return index === seq.length
}
console.log(isSubequence([1, 2, 4, 6], [1, 5, 6]))

// invert binary tree
const invertTree = (tree) => {
    let left = tree.left
    let right = tree.right

    left = tree.right
    right = tree.left

    invertTree(left)
    invertTree(right)
}

// find node depths
const nodeDepths = (root) => sumDepths(root, 0)

const sumDepths = (node, level) => {
    if(!node) return 0
    return level + sumDepths(node.left, level + 1) + sumDepths(node.right, level + 1)
}

// input binar tree class
class BinaryTree {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}