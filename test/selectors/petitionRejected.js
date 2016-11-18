import { assert } from 'chai';
import getPetitionRejected from 'selectors/petitionRejected';

describe('petitionRejected selector', () => {
  context('with a new petition', () => {
    const actual = getPetitionRejected({});
    const expected = false;

    it('returns false', () => assert.equal(actual, expected));
  });

  context('with a drafted petition', () => {
    const actual = getPetitionRejected({
      state: { name: 'draft', parent: '' }
    });
    const expected = false;

    it('returns false', () => assert.equal(actual, expected));
  });

  context('with a rejected petition', () => {
    const actual = getPetitionRejected({
      state: { name: 'rejected', parent: '' }
    });
    const expected = true;

    it('returns true', () => assert.equal(actual, expected));
  });

  context('with a supportable petition', () => {
    const actual = getPetitionRejected({
      state: { name: 'supportable', parent: 'pending' }
    });
    const expected = false;

    it('returns false', () => assert.equal(actual, expected));
  });

  context('with a processing petition', () => {
    const actual = getPetitionRejected({
      state: { name: 'processing', parent: 'sendLetterRequested' }
    });
    const expected = false;

    it('returns false', () => assert.equal(actual, expected));
  });

  context('with a closed petition', () => {
    const actual = getPetitionRejected({
      state: { name: 'closed', parent: '' }
    });
    const expected = false;

    it('returns true', () => assert.equal(actual, expected));
  });

  context('with a losing petition', () => {
    const actual = getPetitionRejected({
      state: { name: 'loser', parent: '' }
    });
    const expected = false;

    it('returns true', () => assert.equal(actual, expected));
  });
});

