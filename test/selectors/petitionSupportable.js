import { assert } from 'chai';
import getPetionSupportable from 'selectors/petitionSupportable';

describe('getPetionSupportable', () => {
  context('with a new petition', () => {
    const actual = getPetionSupportable({});
    const expected = false;

    it('returns false', () => assert.equal(actual, expected));
  });

  context('with a published petition', () => {
    const actual = getPetionSupportable({state: { name: 'pending', parent: 'supportable' }});
    const expected = true;

    it('returns true', () => assert.equal(actual, expected));
  });
});
