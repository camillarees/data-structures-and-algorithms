'use strict';

const { HashTable } = require('hashtable.js');

function repeatedWord(string){
  let table = new HashTable;
  let splitString = string.split(' ');
  let repeatedWord;
  while(!repeatedWord){
    let currentIndex = 0;
    let currentWord = splitString[currentIndex];
    if(table.has(currentWord) && currentWord.toLowerCase() === table.get(currentWord).toLowerCase()){
      currentWord = repeatedWord;
    }
    return repeatedWord;
  }
}

repeatedWord();
