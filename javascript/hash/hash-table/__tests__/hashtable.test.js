'use strict';

const HashTable = require('../hashtable.js');
const repeatedWord = require('./hash-repeated-word');

describe('Hash table test', () => {
  let table = new HashTable(1024);

  test('Setting a key/value to your hashtable results in the value being in the data structure', () => {
    table.add('camilla', 'favorite color is blue');
    let position = table.hash('camilla');
    let result = table.map[position];

    expect(result.head.value).toStrictEqual({'camilla': 'favorite color is blue'});
  });

  test('Retrieving based on a key returns the value stored', () => {
    table.add('camilla', 'favorite color is blue');
    let result = table.get('camilla');

    expect(result).toBeTruthy();
  });

  test('Successfully returns null for a key that does not exist in the hashtable', () => {
    table.add('camilla', 'favorite color is blue');
    let result = table.get('lalicam');

    expect(result).toBe(null);
  });

  test('Successfully returns a list of all unique keys that exist in the hashtable', () => {
    table.add('camilla', 'favorite color is blue');
    table.add('lalicam', 'is my last name');

    expect(table.keys()).toEqual(['camilla', 'lalicam']);
  });

  test('Successfully handle a collision within the hashtable', () => {
    table.add('camilla', 'favorite color is blue');
    table.add('lalicam', 'is my last name');

    expect(table.contains('lalicam')).toBe(true);

    let position = table.hash('camilla');
    let result = table.map[position];

    expect(result.head.next.value).toStrictEqual({'lalicam': 'is my last name'});
  });

  test('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    table.add('camilla', 'favorite color is blue');
    table.add('lalicam', 'is my last name');
    let result = table.get('lalicam');

    expect(result).toStrictEqual('is my last name');
  });

  test('Successfully hash a key to an in-range value', () => {
    let newHash = table.hash('ab');

    expect(newHash).toBeGreaterThanOrEqual(0);
    expect(newHash).toBeLessThanOrEqual(3);
  });

});

describe('repeatedWord function test', () => {

  test('as expected, it returns the first word that occurs more than once in the string', () => {
    expect(repeatedWord('Hello hello how are you how have you been')).toEqual('hello');
  });

  test('returns null if no repeated words are in the string', () => {
    expect(repeatedWord('Hello how are you')).toEqual('null');
  });

  test('returns null if the input is null', () => {
    expect(repeatedWord('')).toBe('null');
  });
});

