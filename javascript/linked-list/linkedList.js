'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }


  insert(value) {
    let node = new Node(value);

    // if no head exists, we assign the new node as head and we are done
    if (!this.head) {
      this.head = node;
      return;
    }

    // traverse the linked list and add the new node to the end
    let current = this.head;

    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  // traverse a linked list and log the value of each node
  traverse() {
    let current = this.head;

    while (current) {
      // do the thing
      console.log(current.value);
      current = current.next;
    }
    let list = new LinkedList();
    list.add('a');
    list.add('b');
    list.add('c');

    console.log(JSON.stringify(list));
    list.traverse();
  }



  includes(value){
    let current = this.head;
    while(current){
      if(current.value === value){
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  }

  toString(){
    let string = '';
    let current = this.head;
    while(current){
      let newString = `{ ${current.value} } -> `;
      string = string + newString;
      current = current.next;
    }
    string = string + 'null';
    return string;
  }
}

module.exports = LinkedList;
