'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    let array = [];
    let traverse = (node) => {
      array.push(node.value);
      if (node.left) {
        traverse(node.left);
        if (node.right) {
          traverse(node.right);
        }
      }
    };

    traverse(this.root);
    return array;
  }

  inOrder() {
    let array = [];
    let traverse = (node) => {
      if (node.left) {
        traverse(node.left); {
          array.push(node.value);
          if (node.right) {
            traverse(node.right);
          }
        }
      }
    };
    traverse(this.root);
    return array;
  }


  postOrder() {
    let array = [];
    let traverse = (node) => {
      if (node.left) {
        traverse(node.left);
        if (node.right) {
          traverse(node.right);
          array.push(node.value);
        }
      }
    };
    traverse(this.root);
    return array;
  }

  maxValue() {

    if (!this.root) {
      return 'cannot find max value in empty tree';
    }

    let temp = new Node(this.root.value);

    const traverse = (node) => {
      if (node.value > temp.value) {
        temp.value = node.value;
      }
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    };

    traverse(this.root);
    return temp.value;
  }


  traverseTree() {
    if (!this.root) return [];
    const queue = [this.root];
    const result = [];
    while (queue.length > 0) {
      let current = queue.shift();
      result.push(current.value);
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
    console.log(result);
    return result;
  }
}

class BinarySearchTree extends BinaryTree {


  add(value) {
    if (!this.root) {
      this.root = new Node(value);
      return;
    }
    let current = this.root;
    while (current) {
      if (current.value > value) {
        if (current.left) {
          current = current.left;
        } else {
          current.left = new Node(value);
          return;
        }
      } else {
        current.right = new Node(value);
        return;
      }
    }
  }

  contains(value) {
    let current = this.root;
    while (current) {
      if (current.value === value) {
        return true;
      }
      if (current.value > value) {
        if (current.left) {
          current = current.left;
        } else {
          return false;
        }
      } else {
        if (current.right) {
          current = current.right;
        } else {
          return false;
        }
      }
    }
  }

}

module.exports = {
  Node,
  BinaryTree,
  BinarySearchTree,
};
