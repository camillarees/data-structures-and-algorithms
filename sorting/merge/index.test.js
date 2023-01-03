const mergeSort = require('./index');

describe('merge sort test', () => {

  it('sorts an array of values', () => {
    let array = [6,24,3,11,10,88];
    let results = mergeSort(array);

    expect(results).toStrictEqual([3,6,10,11,24,88]);
  });

  it('sorts an array of values with an odd length', () => {
    let array = [6,24,3,11,10,88,81];
    let results = mergeSort(array);

    expect(results).toStrictEqual([3,6,10,11,24,81,88]);
  });

  it('sorts an array with one value', () => {
    let array = [1];
    let results = mergeSort(array);

    expect(results).toStrictEqual([1]);
  });

});
