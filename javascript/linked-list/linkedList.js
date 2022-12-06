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
    let newNode = new Node(value);
    // if no head exists, we assign the new node as head and we are done
    if (!this.head) {
      this.head = newNode;
      return;
    } else {
      // traverse the linked list and add the new node to the end
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
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


  includes(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  }

  toString() {
    let string = '';
    let current = this.head;
    while (current) {
      let newString = `{ ${current.value} } -> `;
      string = string + newString;
      current = current.next;
    }
    string = string + 'null';
    return string;
  }

  append(value) {
    let newNode = new Node(value);
    // if no head exists, we assign the new node as head and we are done
    if (!this.head) {
      this.head = newNode;
      return;
    } else {
      // traverse the linked list and add the new node to the end
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }


  insertBefore(value, newValue) {
    let newNode = new Node(newValue);
    let current = this.head;

    if (current.value === value) {
      newNode.next = current;
      this.head = newNode;
    } else {
      while (current) {
        if (current.next.value === value) {
          newNode.next = current.next;
          current.next = newNode;
          return;
        } else {
          current = current.next;
        }
      }
    }
  }


  insertAfter(value, newValue) {
    let newNode = new Node(newValue);
    let current = this.head;

    while (current) {
      if (current.value === value) {
        newNode.next = current.next;
        current.next = newNode;
        return;
      } else {
        current = current.next;
      }
    }
  }
}

module.exports = LinkedList;
