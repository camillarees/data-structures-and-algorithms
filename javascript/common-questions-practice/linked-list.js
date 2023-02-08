'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedListTest {
  constructor() {
    this.head = null;
  }

  add(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  removeNode(key) {
    let current = this.head;
    if (!current) {
      return;
    }
    if (key === 0) {
      this.head = current.next;
      return;
    }
    for (let i = 0; current && i < key - 1; i++) {
      if (!current || !current) {
        return;
      }
      let next = current.next.next;
      current.next = next;
    }
    return;
  }


  findMidpoint() {
    let slowPointer = this.head;
    let fastPointer = this.head;
    while (fastPointer && fastPointer.next) {
      slowPointer = slowPointer.next;
      fastPointer = fastPointer.next.next;
    }
    return slowPointer.value;

  }

  reverse(list) {
    let prev = null;
    let current = list.head;
    let next = null;
    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    list.head = prev;
    return list;
  }

  findLengthRec(node){
    if(!node){
      return 0;
    }
    return 1 + this.findLengthRec(node.next);
  }

  findLength() {
    return this.findLengthRec(this.head);
  }

}

module.exports = LinkedListTest;


