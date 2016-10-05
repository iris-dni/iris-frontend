import { assert } from 'chai';
import getPetitionProcessing from 'selectors/petitionProcessing';

describe('petitionProcessing selector', () => {
  context('with a new petition', () => {
    const actual = getPetitionProcessing({});
    const expected = false;

    it('returns false', () => assert.equal(actual, expected));
  });

  context('with a processing petition', () => {
    const actual = getPetitionProcessing({state: { name: 'sendLetterRequested', parent: 'processing' }});
    const expected = true;

    it('returns true', () => assert.equal(actual, expected));
  });
});
