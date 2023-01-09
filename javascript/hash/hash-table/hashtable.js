'use strict';

const { LinkedList } = require('./linked-list-for-hash.js');

class HashTable {
  constructor(size){
    this.buckets = new Array(this.size);
    this.size = size;
  }

  hash(key){
    let characters = key.split('');
    let asciiSum = characters.reduce((sum, character) => {
      return sum + character.charCodeAt(0);
    }, 0);

    let initialHash = asciiSum * 599;
    return initialHash % this.size;
  }

  set(key, value){
    let position = this.hash(key);
    let data = {[key]: value};

    if(this.buckets[position]){
      let bucket = this.buckets[position];
      bucket.append(data);
    } else {
      let bucket = new LinkedList();
      bucket.append(data);
      this.buckets[position] = bucket;
    }
  }

  get(key){
    let position = this.hash(key);
    if(this.buckets[position]){
      let bucket = this.bucket[position];
      let value = bucket.head.value[key];
      return value;
    }

  }

  has(key){
    let position = this.hash(key);
    if(this.bucket[position]) {
      return true;
    } else {
      return null;
    }
  }

  keys(){
    let keys = [];
    this.table.forEach((bucket) => {
      if(this.bucket) {
        let current = bucket.head;
        while(current) {
          keys.append(Object.kays(current.value)[0]);
          current = current.next;
        }
      }
    });
    return keys;
  }
}

let table = new HashTable(2);
console.log(table);
console.log('Camilla', table.hash('Camilla'));
table.set('Cam', 27);
console.log(table);
console.log(JSON.stringify(table.buckets[1]));
table.set('Cami', 'blue');
console.log('A Camilla value', table.get('Cami'));


module.exports = HashTable;
