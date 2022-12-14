# Stack and Queue

## Challenges, Features, and API

### Stack

![UML](./assets/stack-whiteboard.png)

  - Create a Stack class that has a top property. It creates an empty Stack when instantiated.
  Methods:
    - push
        -adds a new node with that value to the top of the stack with an O(1) Time performance.
    - pop
      - Removes the node from the top of the stack
      - Should raise exception when called on empty stack
    - peek
      - Returns: Value of the node located at the top of the stack
      - Should raise exception when called on empty stack
    - isEmpty
      - Returns boolean indicating whether or not the stack is empty.

### Queue

![UML](./assets/queue-whiteboard.png)

  - Create a Queue class that has a front property. It creates an empty Queue when instantiated.
  Methods:
    - enqueue
      - adds a new node with that value to the back of the queue with an O(1) Time performance.
    - dequeue
      - Removes the node from the front of the queue
      - Should raise exception when called on empty queue
    - peek
      - Returns: Value of the node located at the front of the queue
      - Should raise exception when called on empty stack
    - isEmpty
      - Returns q boolean indicating whether or not the queue is empty

### Psuedo Queue

![UML](./assets/psuedoqueue-whiteboard.jpg)
Create a PseudoQueue class to implement our standard queue interface, with the following methods:
  - enqueue
    - Inserts a value into the PseudoQueue, using a first-in, first-out approach.
  - dequeue
    - Extracts a value from the PseudoQueue, using a first-in, first-out approach.

### Animal Shelter

![UML](./assets/code-challenge-12.png)

- Create a class called AnimalShelter which holds only dogs and cats.
- Methods:
  - enqueue
    - adds an animal (either dog or cat) to the AnimalShelter queue
  - dequeue
    - returns either a dog or a cat, based on preference.
    - If pref is not "dog" or "cat" then return null.

### Brackets

![UML](./assets/code-challenge-13.png)

- Write a function that validates if the brackets in a string are balanced


