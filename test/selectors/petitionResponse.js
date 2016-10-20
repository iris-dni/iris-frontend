import { assert } from 'chai';
import getPetitionResponse from 'selectors/petitionResponse';

describe('petionResponse selector', () => {
  context('with petition in state other than `closed`', () => {
    const actual = getPetitionResponse({
      state: { name: 'draft', parent: '' }
    });
    const expected = {};

    it('returns empty object', () => assert.deepEqual(actual, expected));
  });

  context('with petition in `closed` state and has `city_answer`', () => {
    const answer = { text: 'An official response', name: 'Bürgermeister' };
    const actual = getPetitionResponse({
      state: { name: 'closed', parent: '' },
      city_answer: answer
    });
    const expected = answer;

    it('returns the `city_answer`', () => assert.equal(actual, expected));
  });
});
