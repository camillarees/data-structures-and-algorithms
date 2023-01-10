const { HashTable } = require('hashtable.js');

module.exports = function treeIntersection(bt1, bt2) {
  let results = [];
  let table = new HashTable;
  let currentOne = bt1.root;
  let currentTwo = bt2.root;
  if (!currentOne || !currentTwo) {
    return [];
  }
  function traverseOne(node){
    table.set(node.value, 1);
    if (node.left) {
      traverseOne(node.left);
    }
    if (node.right) {
      traverseOne(node.right);
    }
  }

  traverseOne(currentOne);

  function traverseTwo (node){
    if (table.has(node.value)) {
      results.push(node.value);
    }
    if (node.left) {
      traverseTwo(node.left);

    }
    if (node.right) {
      traverseTwo(node.right);
    }
  }
  traverseTwo(currentTwo);
  return results;
};
