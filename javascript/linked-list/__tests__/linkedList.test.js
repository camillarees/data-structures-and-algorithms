'use strict';

// Require our linked list implementation
const LinkedList = require('../linkedList');

describe('Linked List', () => {
  it('successfully instantiates an empty linked list', () => {
    let list = new LinkedList;

    expect(list.head).toBe(null);
  });

  it('properly inserts into the linked list', () => {
    let list = new LinkedList();
    list.insert('a');

    expect(list.head.value).toEqual('a');
  });

  it('the head property will properly point to the first node in the linked list', () => {
    let list = new LinkedList();
    list.insert('a');
    list.insert('b');

    expect(list.head.value).toEqual('a');
    expect(list.head.next.value).toEqual('b');
  });

  it('properly inserts multiple nodes in the linked list', () => {
    let list = new LinkedList();
    list.insert('a');
    list.insert('b');
    list.insert('c');

    expect(list.head.value).toEqual('a');
    expect(list.head.next.value).toEqual('b');
    expect(list.head.next.next.value).toEqual('c');

  });


  it('returns true when finding a value within the linked list that exists', () => {
    let list = new LinkedList();
    list.insert('a');
    list.insert('b');
    list.insert('c');

    expect(list.includes('a')).toBe(true);
    expect(list.includes('b')).toBe(true);
    expect(list.includes('c')).toBe(true);
  });


  it('returns false when searching for a value in the linked list that does not exist', () => {
    let list = new LinkedList();
    list.insert('a');
    list.insert('b');
    list.insert('c');

    expect(list.includes('d')).toBe(false);
  });

  it('properly returns a collection of all the values that exist in the linked list', () => {
    let list = new LinkedList();
    list.insert('a');
    list.insert('b');
    list.insert('c');

    expect(list.toString()).toEqual('{ a } -> { b } -> { c } -> null');
  });

  it('successfully adds a node to the end of the linked list', () => {
    let list = new LinkedList();
    list.insert('a');
    list.insert('b');
    list.insert('c');
    list.append('y');

    expect(list.head.next.next.next.value).toEqual('y');

  });

  it('successfully adds multiple nodes to the end of a linked list', () => {
    let list = new LinkedList();
    list.insert('a');
    list.insert('b');
    list.insert('c');
    list.append('y');

    expect(list.head.next.next.next.value).toEqual('y');
    list.append('z');
    expect(list.head.next.next.next.next.value).toEqual('z');

  });

  it('successfully inserts a node before a node located in the middle of a linked list', () => {
    let list = new LinkedList();
    list.insert('a');
    list.insert('b');
    list.insert('c');
    list.insertBefore('b', 'bb');

    expect(list.head.next.value).toEqual('bb');
    expect(list.head.next.next.value).toEqual('b');
    expect(list.head.next.next.next.value).toEqual('c');

  });

  it('successfully inserts a node before the first node of a linked list', () => {
    let list = new LinkedList();
    list.insert('a');
    list.insert('b');
    list.insert('c');
    list.insertBefore('a', 'cc');

    expect(list.head.value).toEqual('cc');
    expect(list.head.next.value).toEqual('a');
  });

  it('successfully inserts after a node in the middle of the linked list', () => {
    let list = new LinkedList();
    list.insert('a');
    list.insert('b');
    list.insert('c');
    list.insertAfter('b', 'y');

    expect(list.head.next.next.value).toEqual('y');
    expect(list.head.next.next.next.value).toEqual('c');

  });

  it('successfully inserts a node after the last node of the linked list', () => {
    let list = new LinkedList();
    list.insert('a');
    list.insert('b');
    list.insert('c');
    list.insertAfter('c', 'z');

    expect(list.head.next.next.next.value).toEqual('z');
    expect(list.head.next.next.next.next).toBe(null);
  });

  it('Where k is greater than the length of the linked list ', () => {
    let list = new LinkedList();
    list.insert('a');
    list.append('b');
    list.append('c');

    expect(list.kthFromEnd(4)).toBe('Invalid');
  });

  it('Where k and the length of the list are the same', () => {
    let list = new LinkedList();
    list.insert('a');
    list.append('b');
    list.append('c');

    expect(list.kthFromEnd(3)).toBe('Invalid');
  });

  it('Where k is not a positive integer', () => {
    let list = new LinkedList();
    list.insert('a');
    list.append('b');
    list.append('c');

    expect(list.kthFromEnd(-1)).toBe('Invalid');
  });

  it('Where the linked list is of a size 1', () => {
    let list = new LinkedList();
    list.insert('a');

    expect(list.kthFromEnd(0).toEqual(1));
  });

  it('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {
    let list = new LinkedList();
    list.insert('a');
    list.append('b');
    list.append('c');
    expect(list.kthFromEnd(1)).toEqual('b');
    expect(list.kthFromEnd(0)).toEqual('c');
  });
});





