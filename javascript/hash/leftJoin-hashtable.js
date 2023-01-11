'use strict';

module.exports = function leftJoin(hashtableOne, hashtableTwo) {
  let results = [];
  if (!hashtableOne && !hashtableTwo) {
    return 'no values to output';
  }
  hashtableOne.keys.forEach(key => {
    results.push({
      key: key,
      keySynonym: hashtableOne.get(key),
      keyAntonym: hashtableTwo.get(key),
    });

  });
  return results;
};
