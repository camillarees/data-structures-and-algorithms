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
    this.tail = null;
    this.count = 0;
  }

  insert(value) {
    let newNode = new Node(value);
    // if no head exists, we assign the new node as head and we are done
    if (!this.head) {
      this.head = newNode;
    } else {
      // traverse the linked list and add the new node to the end
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.count++;
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
    } else {
      // traverse the linked list and add the new node to the end
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.count++;
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

  kthFromEnd(k) {
    if (k >= this.count || k < 0) {
      return 'Invalid';
    }
    let result = this.count - k;
    let current = this.head;
    for (let i = 0; i < result -1; i++) {
      current = current.next;
    }
    return current.value;
  }
}

function zipList(list1, list2) {
  let zippedList = new LinkedList();
  let currentList1 = list1.head;
  let currentList2 = list2.head;

  while(currentList1 && currentList2) {
    zippedList.append(currentList1.value);
    currentList1 = currentList1.next;
    zippedList.append(currentList2.value);
    currentList2 = currentList2.next;
  }

  while(currentList1){
    zippedList.append(currentList1.value);
    currentList1 = currentList1.next;
  }

  while(currentList2){
    zippedList.append(currentList2.value);
    currentList2 = currentList2.next;
  }
  return zippedList;
}


module.exports = {
  LinkedList,
  zipList,
};
