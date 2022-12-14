'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

module.exports = { Node };

class AnimalShelter {

  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(animal) {

    let newAnimal = new Node(animal);
    if (this.front) {
      this.back.next = newAnimal;
      this.back = newAnimal;

    } else {
      this.front = newAnimal;
      this.back = newAnimal;

      return;
    }
  }

  dequeue(pref) {

    if (!this.front) {
      return 'cannot dequeue from empty queue';
    }

    if (!pref) {

      let dequeuedNode = this.front;
      this.front = this.front.next;
      dequeuedNode.next = null;

      return dequeuedNode.value;
    }

    if (!this.front.next) {
      if (this.front.value === pref) {
        this.dequeue();
      } else {
        return 'no animals of that preference';
      }
      let current = this.front.next;
      let previous = this.front;

      while (current) {
        if (current === pref) {
          const dequeuedAnimal = current.value;
          previous.next = current.next;
          current.next = null;
          return dequeuedAnimal;

        }
        current = current.next;
      }
      return 'no animals of that preference';

    }
  }
}

module.exports = {
  AnimalShelter
};
