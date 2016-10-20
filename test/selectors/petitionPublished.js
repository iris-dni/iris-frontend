import { assert } from 'chai';
import getPetionPublished from 'selectors/petitionPublished';

describe('petionPublished selector', () => {
  context('with a new petition', () => {
    const actual = getPetionPublished({});
    const expected = false;

    it('returns false', () => assert.equal(actual, expected));
  });

  context('with a drafted petition', () => {
    const actual = getPetionPublished({
      state: { name: 'draft', parent: '' }
    });
    const expected = false;

    it('returns false', () => assert.equal(actual, expected));
  });

  context('with a rejected petition', () => {
    const actual = getPetionPublished({
      state: { name: 'rejected', parent: '' }
    });
    const expected = false;

    it('returns false', () => assert.equal(actual, expected));
  });

  context('with a supportable petition', () => {
    const actual = getPetionPublished({
      state: { name: 'supportable', parent: 'pending' }
    });
    const expected = true;

    it('returns true', () => assert.equal(actual, expected));
  });

  context('with a processing petition', () => {
    const actual = getPetionPublished({
      state: { name: 'processing', parent: 'sendLetterRequested' }
    });
    const expected = true;

    it('returns true', () => assert.equal(actual, expected));
  });

  context('with a closed petition', () => {
    const actual = getPetionPublished({
      state: { name: 'closed', parent: '' }
    });
    const expected = true;

    it('returns true', () => assert.equal(actual, expected));
  });

  context('with a losing petition', () => {
    const actual = getPetionPublished({
      state: { name: 'loser', parent: '' }
    });
    const expected = true;

    it('returns true', () => assert.equal(actual, expected));
  });
});

