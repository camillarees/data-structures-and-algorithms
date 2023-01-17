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

});