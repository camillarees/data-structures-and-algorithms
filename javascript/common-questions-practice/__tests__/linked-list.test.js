'use strict';

const { LinkedListTest } = require('../linked-list.js');

describe('Linked List Tests', () => {

  it('finds the midpoint of the linked link with an odd amount of nodes', () => {
    let list = new LinkedListTest();
    list.add(1);
    list.add(2);
    list.add(3);
    list.add(4);
    list.add(5);

    expect(list.findMidpoint().toBe(3));
  });

  it('finds the midpoint of the linked link with an even amount of nodes', () => {
    let list = new LinkedListTest();
    list.add(1);
    list.add(2);
    list.add(3);
    list.add(4);

    expect(list.findMidpoint().toBe(2));
  });

  it('returns null if the list is null', () => {
    let list = new LinkedListTest();
    expect(list.findMidpoint().toBe(null));
  });

  it('returns reversed linked list as expected', () => {
    let list = new LinkedListTest();
    list.add(1);
    list.add(2);
    list.add(3);
    list.reverse();

    expect(list.head.value).toBe(3);
  });

  it('returns null if linked list is null', () => {
    let list = new LinkedListTest();
    list.reverse();

    expect(list.head.value).toBe(null);
  });

  it('returns the linked list (same value) when it only has one node', () => {
    let list = new LinkedListTest();
    list.add(1);
    list.reverse();

    expect(list.head.value).toBe(1);
  });

  it('returns list with removed node as expected', () => {
    let list = new LinkedListTest();
    list.add(1);
    list.add(2);
    list.add(3);
    list.removeNode(3);

    expect(list.head.value).toBe(1);
    expect(list.head.next.value).toBe(2);
  });

  it('returns null if linked list is null', () => {
    let list = new LinkedListTest();
    list.removeNode();

    expect(list.head.value).toBe(null);
  });

  it('returns the the list the same if the key position does not exist or match a linked list position', () => {
    let list = new LinkedListTest();
    list.add(1);
    list.add(2);
    list.add(3);
    list.removeNode(4);

    expect(list.head.value).toBe(1);
    expect(list.head.next.value).toBe(2);
    expect(list.head.next.next.value).toBe(3);
  });

  it('counts nodes in linked list as expected', () => {
    let list = new LinkedListTest();
    list.add(1);
    list.add(2);
    list.add(3);

    expect(list.getLength().toBe(3));
  });

  it('returns 0 if head does not exist', () => {
    let list = new LinkedListTest();

    expect(list.getLength().toBe(0));
  });

  it('works with negative integers as values', () => {
    let list = new LinkedListTest();
    list.add(-1);
    list.add(-2);
    list.add(-3);

    expect(list.getLength().toBe(3));
  });
});
