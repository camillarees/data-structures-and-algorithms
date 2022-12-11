'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

module.exports = Node;


module.exports = class Stack {

  constructor(){
    this.top = null;
    this.count = 0;
  }


  push(value){
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
    this.count++;
  }

  pop(){
    if (this.top){
      let poppedNode = this.top;
      this.top = poppedNode.next;
      this.count--;
      return poppedNode.value;
    } else {
      return 'cannot pop from empty stack';
    }
  }

  peek(){
    if (this.top){
      return this.top.value;
    } else {
      return 'cannot peek empty stack';
    }
  }

  isEmpty(){
    return this.top === null;
  }

};
