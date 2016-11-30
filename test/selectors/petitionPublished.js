import { assert } from 'chai';
import getPetitionPublished from 'selectors/petitionPublished';
import petition from '../mocks/petition';
import petitionSupportable from '../mocks/petitionSupportable';
import petitionClosed from '../mocks/petitionClosed';
import petitionProcessing from '../mocks/petitionProcessing';

describe('petionPublished selector', () => {
  context('with a mock draft petition', () => {
    const actual = getPetitionPublished(petition.data);
    const expected = false;

    it('returns false', () => assert.equal(actual, expected));
  });

  context('with a mock supportable petition', () => {
    const actual = getPetitionPublished(petitionSupportable.data);
    const expected = true;

    it('returns true', () => assert.equal(actual, expected));
  });

  context('with a mock closed petition', () => {
    const actual = getPetitionPublished(petitionClosed.data);
    const expected = true;

    it('returns true', () => assert.equal(actual, expected));
  });

  context('with a mock processing petition', () => {
    const actual = getPetitionPublished(petitionProcessing.data);
    const expected = true;

    it('returns true', () => assert.equal(actual, expected));
  });

  context('with a new petition', () => {
    const actual = getPetitionPublished({});
    const expected = false;

    it('returns false', () => assert.equal(actual, expected));
  });

  context('with a drafted petition', () => {
    const actual = getPetitionPublished({
      state: { name: 'draft', parent: '' }
    });
    const expected = false;

    it('returns false', () => assert.equal(actual, expected));
  });

  context('with a rejected petition', () => {
    const actual = getPetitionPublished({
      state: { name: 'rejected', parent: '' }
    });
    const expected = false;

    it('returns false', () => assert.equal(actual, expected));
  });

  context('with a supportable petition', () => {
    const actual = getPetitionPublished({
      state: { name: 'supportable', parent: 'pending' }
    });
    const expected = true;

    it('returns true', () => assert.equal(actual, expected));
  });

  context('with a processing petition', () => {
    const actual = getPetitionPublished({
      state: { name: 'processing', parent: 'sendLetterRequested' }
    });
    const expected = true;

    it('returns true', () => assert.equal(actual, expected));
  });

  context('with a closed petition', () => {
    const actual = getPetitionPublished({
      state: { name: 'closed', parent: '' }
    });
    const expected = true;

    it('returns true', () => assert.equal(actual, expected));
  });

  context('with a losing petition', () => {
    const actual = getPetitionPublished({
      state: { name: 'loser', parent: '' }
    });
    const expected = true;

    it('returns true', () => assert.equal(actual, expected));
  });
});

