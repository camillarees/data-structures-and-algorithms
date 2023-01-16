'use strict';

const { LinkedList } = require("../linked-list/linkedList");

class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedListTest {
  constructor(){
    this.head = null;
  }

  add(value) {
    const node = new Node(value);
    if(!this.head){
      this.head = node;
      return;
    }

    let current = this.head;
    while(current.next){
      current = current.next;
    }
    current.next = node;
  }

  // removeNode(){

  // }

  findMidpoint(){
    let slowPointer = this.head;
    let fastPointer = this.head ;
    while(fastPointer && fastPointer.next){
      slowPointer = slowPointer.next;
      fastPointer = fastPointer.next.next;
    }
    return slowPointer.value;

  }
}

// reverseList(){

// }

module.exports = LinkedListTest;


