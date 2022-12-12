'use strict';

const Stack = require('./stack');
const Queue = require('./queue');
const PseudoQueue = require('./pseudoQueue');

describe('Stack test', () => {

  it('can successfully push onto a stack', () => {
    const newStack = new Stack;
    newStack.push(1);
    expect(newStack.count).toBe(1);
    expect(newStack.top).toBeTruthy();
    expect(newStack.top.value).toEqual(1);
  });

  it('can successfully push multiple values onto a stack', () => {
    const newStack = new Stack;
    newStack.push(1);
    newStack.push(2);
    newStack.push(3);
    expect(newStack.count).toBe(3);
    expect(newStack.top.value).toEqual(3);
    expect(newStack.top.next.value).toEqual(2);
  });

  it('can successfully pop off the stack', () => {
    const newStack = new Stack;
    newStack.push(1);
    newStack.push(2);
    newStack.push(3);
    newStack.pop();
    expect(newStack.count).toBe(2);
    expect(newStack.top.value).toEqual(2);
    expect(newStack.pop()).toEqual(2);
  });

  it('can successfully empty a stack after multiple pops', () => {
    const newStack = new Stack;
    newStack.push(1);
    newStack.push(2);
    newStack.push(3);
    newStack.pop();
    newStack.pop();
    newStack.pop();
    expect(newStack.count).toBe(0);
    expect(newStack.top).toBeFalsy();
  });

  it('can successfully peek the next item on the stack', () => {
    const newStack = new Stack;
    newStack.push(1);
    newStack.push(2);
    newStack.push(3);
    expect(newStack.peek()).toEqual(3);
  });

  it('can successfully instantiate an empty stack', () => {
    const newStack = new Stack;
    expect(newStack.top).toBeFalsy();
    expect(newStack).toBeTruthy();
  });

  it('calling pop or peek on empty stack raises exception', () => {
    const newStack = new Stack;
    expect(newStack.pop()).toEqual('cannot pop from empty stack');
    expect(newStack.peek()).toEqual('cannot peek empty stack');
  });

});


describe('Queue test', () => {

  it('can successfully enqueue into a queue', () => {
    const newQueue = new Queue;
    newQueue.enqueue(1);
    expect(newQueue.count).toBe(1);
    expect(newQueue.front).toBeTruthy();
    expect(newQueue.back).toBeTruthy();
    expect(newQueue.front.value).toEqual(1);
  });

  it('can successfully enqueue multiple values into a queue', () => {
    const newQueue = new Queue;
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    newQueue.enqueue(3);
    expect(newQueue.count).toBe(3);
    expect(newQueue.front.value).toEqual(1);
    expect(newQueue.back.value).toEqual(3);
  });

  it('can successfully dequeue out of a queue the expected value', () => {
    const newQueue = new Queue;
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    newQueue.enqueue(3);
    newQueue.dequeue();
    expect(newQueue.count).toBe(2);
    expect(newQueue.front.value).toEqual(2);
    expect(newQueue.dequeue()).toEqual(2);
  });

  it('can successfully peek into a queue, seeing the expected value', () => {
    const newQueue = new Queue;
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    newQueue.enqueue(3);
    expect(newQueue.peek()).toEqual(1);
  });

  it('can successfully empty a queue after multiple dequeues', () => {
    const newQueue = new Queue;
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    newQueue.enqueue(3);
    newQueue.dequeue();
    newQueue.dequeue();
    newQueue.dequeue();
    expect(newQueue).toBeTruthy();
    expect(newQueue.front).toBeFalsy();
  });

  it('can successfully instantiate an empty queue', () => {
    const newQueue = new Queue;
    expect(newQueue.front).toBeFalsy();
    expect(newQueue.back).toBeFalsy();
    expect(newQueue).toBeTruthy();
  });

  it('calling dequeue or peek on empty queue raises exception', () => {
    const newQueue = new Queue;
    expect(newQueue.dequeue()).toEqual('cannot dequeue from empty queue');
    expect(newQueue.peek()).toEqual('cannot peek empty queue');
  });

});

describe('Psuedo Queue Test', () => {

  it('enqueues into pseudoqueue as expected', () => {
    const newQueue = new PseudoQueue();
    newQueue.enqueue(1);
    expect(newQueue.stack1.top.value).toEqual(1);
  });

  it('returns undefined if given no value to dequeue', () => {
    const newQueue = new PseudoQueue();
    newQueue.enqueue();
    expect(newQueue.stack1.top.value).toEqual(undefined);
  });

  it('dequeues from pseudoqueue as expected', () => {
    const newQueue = new PseudoQueue();
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    expect(newQueue.stack1.top.value).toEqual(2);
    expect(newQueue.dequeue()).toEqual(1);
  });

  it('returns an error message if the pseudoqueue is empty', () => {
    const newQueue = new PseudoQueue();
    expect(newQueue.dequeue()).toEqual('cannot dequeue from empty pseudoqueue');
  });
});
