'use strict';

const { Node, BinaryTree, BinarySearchTree } = require('./trees');

describe('Trees', () => {

  it('Can successfully instantiate an empty tree', () => {
    let tree = new BinaryTree();

    expect(tree).toBeTruthy();
    expect(tree.root).toBeFalsy();
  });

  it('Can successfully instantiate a tree with a single root node', () =>{

    let tree = new BinaryTree();
    tree.root = new Node(1);

    expect(tree.root.value).toEqual(1);
    expect(tree.root.left).toBeNull();
    expect(tree.root.right).toBeNull();
  });

  it('For a Binary Search Tree, can successfully add a left child and right child properly to a node', () => {

    let searchTree = new BinarySearchTree();
    searchTree.add(1);
    searchTree.add(2);
    searchTree.add(3);

    expect(searchTree.root.value).toEqual(1);
    expect(searchTree.root.left).toEqual(2);
    expect(searchTree.root.right).toEqual(3);
  });

  it('Can successfully return a collection from a preorder traversal', () => {

    let tree = new BinaryTree();
    tree.root = new Node(2);
    tree.root.left = new Node(1);
    tree.root.right = new Node(4);
    tree.root.left.left = new Node(3);
    tree.root.left.right = new Node(5);

    expect(tree.preOrder()).toEqual([2, 1, 3, 5, 4]);
  });

  it('Can successfully return a collection from an inorder traversal', () => {

    let tree = new BinaryTree();
    tree.root = new Node(4);
    tree.root.left = new Node(2);
    tree.root.right = new Node(5);
    tree.root.left.left = new Node(1);
    tree.root.left.right = new Node(3);
    tree.root.left.right = new Node(6);

    expect(tree.inOrder()).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('Can successfully return a collection from a postorder traversal', () => {

    let tree = new BinaryTree();
    tree.root = new Node(2);
    tree.root.left = new Node(1);
    tree.root.right = new Node(4);
    tree.root.left.left = new Node(3);
    tree.root.left.right = new Node(5);
    tree.root.left.right = new Node(6);

    expect(tree.postOrder()).toEqual([3, 5, 1, 6, 4, 2]);
  });

  it('Returns true, false for the contains method, given an existing or non-existing node value', () => {

    let searchTree = new BinarySearchTree();
    searchTree.add(1);
    searchTree.add(2);
    searchTree.add(3);

    expect(searchTree.contains(3)).toEqual(true);
    expect(searchTree.contains(5)).toEqual(false);
  });

  it('Can find maximum value as expected', () => {
    let tree = new BinaryTree();
    tree.root = new Node(2);
    tree.root.left = new Node(1);
    tree.root.right = new Node(4);
    tree.root.left.left = new Node(3);
    tree.root.left.right = new Node(5);
    tree.root.left.right = new Node(6);

    expect(tree.maxValue()).toEqual(6);
  });

  it('Can find maximum value as expected, even if there are multiple of the same max value', () => {
    let tree = new BinaryTree();
    tree.root = new Node(2);
    tree.root.left = new Node(1);
    tree.root.right = new Node(6);
    tree.root.left.left = new Node(3);
    tree.root.left.right = new Node(5);
    tree.root.left.right = new Node(6);

    expect(tree.maxValue()).toEqual(6);
  });

  it('Returns an error message if the tree is empty', () => {
    let tree = new BinaryTree();

    expect(tree.maxValue()).toEqual('cannot find max value in empty tree');
  });

  it('Breadth first search returns values in order as expected', () => {
    let tree = new BinaryTree();
    tree.root = new Node(2);
    tree.root.left = new Node(1);
    tree.root.right = new Node(4);
    tree.root.left.left = new Node(3);
    tree.root.left.right = new Node(5);
    tree.root.right.right = new Node(6);
    // console.log(tree);
    expect(tree.traverseTree()).toEqual([2, 1, 4, 3, 5, 6]);
  });

  it('Returns an empty array if tree is empty', () => {
    let tree = new BinaryTree();

    expect(tree.traverseTree()).toEqual([]);
  });

  it('Breadth first search returns values in order as expected, even with multiple nodes at the same breadth level', () => {
    let tree = new BinaryTree();
    tree.root = new Node(2);
    tree.root.left = new Node(1);
    tree.root.right = new Node(4);
    tree.root.left.left = new Node(3);
    tree.root.left.right = new Node(5);
    tree.root.right.left = new Node(7);
    tree.root.right.right = new Node(6);

    expect(tree.traverseTree()).toEqual([2, 1, 4, 3, 5, 7, 6]);
  });

});
