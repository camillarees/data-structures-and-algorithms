'use strict';

const { AnimalShelter } = require('../animal-shelter-queue');

describe('Animal Shelter Queue', () => {

  it('can to enqueue an animal', () => {
    const animalShelter = new AnimalShelter;
    animalShelter.enqueue('dog');
    expect(animalShelter.front).toBeTruthy();
    expect(animalShelter.back).toBeTruthy();
    expect(animalShelter.front.value).toEqual('dog');
  });

  it('can enqueue multiple animals', () => {
    const animalShelter = new AnimalShelter;
    animalShelter.enqueue('dog');
    animalShelter.enqueue('cat');
    animalShelter.enqueue('dog');
    expect(animalShelter.front.value).toEqual('dog');
    expect(animalShelter.back.value).toEqual('dog');
  });

  it('can dequeue an animal', () => {
    const animalShelter = new AnimalShelter;
    animalShelter.enqueue('dog');
    animalShelter.enqueue('cat');
    animalShelter.enqueue('dog');
    animalShelter.dequeue();
    expect(animalShelter.front.value).toEqual('cat');
    expect(animalShelter.dequeue()).toEqual('cat');
  });

  it('can dequeue all animals', () => {
    const animalShelter = new AnimalShelter;
    animalShelter.enqueue('dog');
    animalShelter.enqueue('cat');
    animalShelter.enqueue('dog');
    animalShelter.dequeue();
    animalShelter.dequeue();
    animalShelter.dequeue();
    expect(animalShelter).toBeTruthy();
    expect(animalShelter.front).toBeFalsy();
  });

  it('can instantiate an empty animal shelter', () => {
    const animalShelter = new AnimalShelter;
    expect(animalShelter.front).toBeFalsy();
    expect(animalShelter.back).toBeFalsy();
    expect(animalShelter).toBeTruthy();

  });


  it('should throw an exception if the animal type to dequeue is not a cat or dog', () => {
    const animalShelter = new AnimalShelter;
    animalShelter.enqueue('bird');
    animalShelter.enqueue('cat');
    animalShelter.enqueue('dog');
    expect(animalShelter.dequeue()).toEqual('no animals of that preferece');

  });

});

