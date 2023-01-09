'use strict';

const HashTable = require('../hashtable.js');

describe('Hash table test', () => {
  let table = new HashTable(1024);

  test('Setting a key/value to your hashtable results in the value being in the data structure', () => {
    table.add('Camilla', 'favorite color is blue');
    let position = table.hash('Camilla');
    let result = table.map[position];

    expect(result.head.value).toStrictEqual({'Camilla': 'favorite color is blue'});
  });

  test('Retrieving based on a key returns the value stored', () => {
    table.add('Camilla', 'favorite color is blue');
    let result = table.get('Camilla');

    expect(result).toBeTruthy();
  });

  test('Successfully returns null for a key that does not exist in the hashtable', () => {
    table.add('Camilla', 'favorite color is blue');
    let result = table.get('Rees');

    expect(result).toBe(null);
  });

  test('Successfully returns a list of all unique keys that exist in the hashtable', () => {
    table.add('Camilla', 'favorite color is blue');
    table.add('Rees', 'is my last name');

    expect(table.keys()).toEqual(['Camilla', 'Rees']);
  });

  test('Successfully handle a collision within the hashtable', () => {
    table.add('Camilla', 'favorite color is blue');
    table.add('Rees', 'is my last name');

    expect(table.contains('Rees')).toBe(true);

    let position = table.hash('Camilla');
    let result = table.map[position];

    expect(result.head.next.value).toStrictEqual({'Rees': 'is my last name'});
  });

  test('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    table.add('Camilla', 'favorite color is blue');
    table.add('Rees', 'is my last name');
    let result = table.get('Rees');

    expect(result).toStrictEqual('is my last name');
  });

  test('Successfully hash a key to an in-range value', () => {
    let newHash = table.hash('hi');

    expect(newHash).toBeGreaterThanOrEqual(0);
    expect(newHash).toBeLessThanOrEqual(11);
  });

});
