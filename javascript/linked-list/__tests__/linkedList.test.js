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

});




