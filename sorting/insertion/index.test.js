'use strict';

const sortInsertion = require('./index');

describe('insertion sort test', () =>{

  it('takes in an array and returns it sorted', () =>{
    let array = [5,3,1,2,4];
    let results = sortInsertion(array);

    expect(results).toStrictEqual([1,2,3,4,5]);
  });

  it('accepts an array with one value', () => {
    let array = [1];
    let results = sortInsertion(array);

    expect(results).toStrictEqual([1]);
  });

  it('returns an empty array if the input array is empty', () => {
    let array = [];
    let results = sortInsertion(array);

    expect(results).toStrictEqual([]);
  });

});
