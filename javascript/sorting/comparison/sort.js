'use strict';

// const { mainModule } = require('process');


function sortYear(arr, callback) {
  arr.sort(callback);
  return arr;
}

function compareYear(a, b) {
  if(a.year === b.year) return 0;
  if(a.year < b.year) return 1;
  if(a.year > b.year) return -1;
}

function sortTitle(arr, callback) {
  arr.sort(callback);
  return arr;
}

function compareTitle(a, b) {
  a = a.title;
  b = b.title;
  if(a.startsWith('The ')){
    a = a.replace('The ', '');
  }
  if(b.startsWith('The ')){
    b = b.replace('The ', '');
  }
  if(a < b) return -1;
  if(a > b) return 1;

}


module.exports = {sortYear, compareYear, sortTitle, compareTitle};
