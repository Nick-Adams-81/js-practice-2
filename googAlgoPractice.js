

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

// input binar tree class
class BinaryTree {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

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

// matrix finding all adjacent 1 values
const explore = (i, j, size, matrix, visited) => {
    if(visited[i][j]) return size
  
    visited[i][j] = true
    size++
  
    if(matrix[i][j + 1] === 1) size = explore(i, j + 1, size, matrix, visited)
    if(matrix[i][j - 1] === 1) size = explore(i, j - 1, size, matrix, visited)
    if(matrix[i + 1] && matrix[i + 1][j] === 1) size = explore(i + 1, j, size, matrix, visited)
    if(matrix[i - 1] && matrix[i - 1][j] === 1) size = explore(i - 1, j, size, matrix, visited)
  
    return size
  }

  const riverSizes = (matrix) => {
    const visited = []
    for(let i = 0; i < matrix.length; i++) {
      const line = new Array(matrix[i].length).fill(null)
      visited.push(line)
    }
    const rivers = []
    for(let i = 0; i< matrix.length; i++) {
      for(let j = 0; j < matrix[i].length; j++) {
        if(visited[i][j]) continue;
        if(matrix[i][j] === 1) {
          const river = explore(i, j, 0, matrix, visited)
          rivers.push(river)
        } else visited[i][j] = true
      }
    }
    return rivers
  }
