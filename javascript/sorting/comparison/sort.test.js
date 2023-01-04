'use strict';

const { Movies } = require('./movies');
const { sortTitle, compareTitle, sortYear, compareYear } = require('./sort');

describe('Sorters', () => {
  it('can sort movies by year', () => {
    const movies = sortYear(Movies, compareYear);
    expect(movies.map((m) => m.title)).toEqual([
      'The Intouchables',
      'Valkyrie',
      'Ratatouille',
      'Stardust',
      'City of God',
      'Memento',
      'The Shawshank Redemption',
      'Beetlejuice',
      'Crocodile Dundee',
      'The Cotton Club',
    ]);
  });

  it('can sort movies by title', () => {
    const movies = sortTitle(Movies, compareTitle);
    expect(movies.map((m) => m.title)).toEqual([
      'Beetlejuice',
      'City of God',
      'The Cotton Club',
      'Crocodile Dundee',
      'The Intouchables',
      'Memento',
      'Ratatouille',
      'The Shawshank Redemption',
      'Stardust',
      'Valkyrie',
    ]);
  });
});
