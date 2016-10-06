import { assert } from 'chai';
import getPetitionClosed from 'selectors/petitionClosed';

describe('petionClosed selector', () => {
  context('with petition in state other than `closed`', () => {
    const actual = getPetitionClosed({
      state: { name: 'draft', parent: '' }
    });
    const expected = false;

    it('returns false', () => assert.equal(actual, expected));
  });

  context('with petition in `closed` state', () => {
    const actual = getPetitionClosed({
      state: { name: 'closed', parent: '' }
    });
    const expected = true;

    it('returns true', () => assert.equal(actual, expected));
  });
});
