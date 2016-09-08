import { assert } from 'chai';
import getPetionPersisted from 'selectors/petitionPersisted';

describe('getPetionPersisted', () => {
  context('with a new petition', () => {
    const actual = getPetionPersisted({});
    const expected = false;

    it('returns false', () => assert.equal(actual, expected));
  });

  context('with a persisted petition', () => {
    const actual = getPetionPersisted({id: 'someid'});
    const expected = true;

    it('returns true', () => assert.equal(actual, expected));
  });
});
