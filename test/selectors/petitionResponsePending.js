import { assert } from 'chai';
import getPetitionResponsePending from 'selectors/petitionResponsePending';

describe('petitionResponsePending selector', () => {
  context('with a new petition', () => {
    const actual = getPetitionResponsePending({});
    const expected = true;

    it('returns true', () => assert.equal(actual, expected));
  });

  context('with a pending response', () => {
    const actual = getPetitionResponsePending({state: { name: 'waitForLetterResponse', parent: 'processing' }});
    const expected = true;

    it('returns true', () => assert.equal(actual, expected));
  });

  context('with an arrived response', () => {
    const actual = getPetitionResponsePending({state: { name: 'letterResponseArrived', parent: 'processing' }});
    const expected = false;

    it('returns false', () => assert.equal(actual, expected));
  });
});
