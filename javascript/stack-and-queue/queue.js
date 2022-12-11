'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

module.exports = Node;

module.exports = class Queue {

  constructor(){
    this.front = null;
    this.back = null;
    this.count = 0;
  }

  enqueue(value){
    let newNode = new Node(value);
    this.count++;
    if(this.front){
      this.back.next = newNode;
      this.back = newNode;
    } else {
      this.front = newNode;
      this.back = newNode;
      return;
    }
  }

  dequeue(){
    if(this.front){
      let dequeuedNode = this.front;
      this.front = this.front.next;
      dequeuedNode.next = null;
      this.count--;
      return dequeuedNode.value;
    } else {
      return 'cannot dequeue from empty queue';
    }
  }

  peek(){
    if (this.front){
      return this.front.value;
    } else {
      return 'cannot peek empty queue';
    }
  }

  isEmpty(){
    return this.front === null;
  }

};
