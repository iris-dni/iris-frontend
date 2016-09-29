import { assert } from 'chai';
import getPetionResponse from 'selectors/petitionResponse';

describe('petionResponse selector', () => {
  context('with petition in state other than `letterResponseArrived`', () => {
    const actual = getPetionResponse({
      state: { name: 'draft', parent: '' }
    });
    const expected = {};

    it('returns empty object', () => assert.deepEqual(actual, expected));
  });

  context('with petition in `letterResponseArrived` state and has `city_answer`', () => {
    const answer = { text: 'An official response', name: 'Bürgermeister' };
    const actual = getPetionResponse({
      state: { name: 'letterResponseArrived', parent: 'processing' },
      city_answer: answer
    });
    const expected = answer;

    it('returns the `city_answer`', () => assert.equal(actual, expected));
  });
});
