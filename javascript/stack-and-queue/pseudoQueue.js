'use strict';

const Stack = require('./stack');

module.exports = class PseudoQueue {

  constructor(){
    this.stack1 = new Stack;
    this.stack2 = new Stack;
  }

  enqueue(value){
    this.stack1.push(value);
  }

  dequeue(){
    if(this.stack1.top === null) {
      return 'cannot dequeue from empty pseudoqueue';
    }
    while(this.stack1.top){
      this.stack2.push(this.stack1.pop());
    }
    let temp = this.stack2.pop();
    while(this.stack2.top){
      this.stack1.push(this.stack2.pop());
    }
    return (temp);
  }

};
