import { assert } from 'chai';
import getPetitionSupportable from 'selectors/petitionSupportable';

describe('getPetitionSupportable', () => {
  context('with a new petition', () => {
    const actual = getPetitionSupportable({});
    const expected = false;

    it('returns false', () => assert.equal(actual, expected));
  });

  context('with a published petition', () => {
    const actual = getPetitionSupportable({state: { name: 'pending', parent: 'supportable' }});
    const expected = true;

    it('returns true', () => assert.equal(actual, expected));
  });
});
