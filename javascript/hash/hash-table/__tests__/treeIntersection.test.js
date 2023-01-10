'use strict';

const { BinaryTree } = require('./tree-for-intersection');
const treeIntersection = require('./treeIntersection');

describe('tree intersection test', () => {
  let bt1 = new BinaryTree();
  bt1.add(150);
  bt1.add(100);
  bt1.add(250);
  bt1.add(75);
  bt1.add(160);
  bt1.add(200);
  bt1.add(350);
  bt1.add(125);
  bt1.add(175);
  bt1.add(300);
  bt1.add(500);

  let bt2 = new BinaryTree();
  bt2.add(42);
  bt2.add(100);
  bt2.add(600);
  bt2.add(15);
  bt2.add(160);
  bt2.add(200);
  bt2.add(350);
  bt2.add(125);
  bt2.add(175);
  bt2.add(4);
  bt2.add(500);

  let results = treeIntersection(bt1, bt2);

  test('function returns an array of matching values from each binary tree as expected', () => {
    expect(results).toStrictEqual([100,160,125,200,175,350,500]);
  });

  test('if there are no matching values, return an empty array', () => {
    expect(results).toStrictEqual([]);
  });

  test('if either tree is empty, return an empty array', () => {
    expect(results).toStrictEqual([]);
  });

});
