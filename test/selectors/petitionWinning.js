import { assert } from 'chai';
import getPetitionWinning from 'selectors/petitionWinning';

describe('petitionWinning selector', () => {
  context('with petition in `active` state', () => {
    const actual = getPetitionWinning({
      state: { name: 'active', parent: 'supportable' },
      supporters: { amount: 1, required: 10 }
    });
    const expected = false;

    it('returns false', () => assert.equal(actual, expected));
  });

  context('with petition in `loser` state', () => {
    const actual = getPetitionWinning({
      state: { name: 'loser', parent: '' },
      supporters: { amount: 1, required: 10 }
    });
    const expected = false;

    it('returns false', () => assert.equal(actual, expected));
  });

  context('with petition in `winner` state, but not enough supporters (somehow)', () => {
    const actual = getPetitionWinning({
      state: { name: 'winner', parent: 'supportable' },
      supporters: { amount: 1, required: 10 }
    });
    const expected = false;

    it('returns false', () => assert.equal(actual, expected));
  });

  context('with petition in `processing` parent state, but not enough supporters (somehow)', () => {
    const actual = getPetitionWinning({
      state: { name: '', parent: 'processing' },
      supporters: { amount: 2, required: 10 }
    });
    const expected = false;

    it('returns false', () => assert.equal(actual, expected));
  });

  context('with petition in `winner` state, and enough supporters', () => {
    const actual = getPetitionWinning({
      state: { name: 'winner', parent: 'supportable' },
      supporters: { amount: 10, required: 10 }
    });
    const expected = true;

    it('returns true', () => assert.equal(actual, expected));
  });

  context('with petition in `processing` parent state, and enough supporters', () => {
    const actual = getPetitionWinning({
      state: { name: '', parent: 'processing' },
      supporters: { amount: 12, required: 10 }
    });
    const expected = true;

    it('returns true', () => assert.equal(actual, expected));
  });
});
