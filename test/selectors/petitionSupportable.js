import { assert } from 'chai';
import getPetitionSupportable from 'selectors/petitionSupportable';
import mockPetition from '../mocks/petition';
import mockSupportablePetition from '../mocks/petitionSupportable';

describe('petitionSupportable selector', () => {
  context('with a new petition', () => {
    const actual = getPetitionSupportable({});
    const expected = false;

    it('returns false', () => assert.equal(actual, expected));
  });

  context('with a draft petition', () => {
    const actual = getPetitionSupportable(mockPetition);
    const expected = false;

    it('returns false', () => assert.equal(actual, expected));
  });

  context('with a published petition', () => {
    const actual = getPetitionSupportable(mockSupportablePetition.data);
    const expected = true;

    it('returns true', () => assert.equal(actual, expected));
  });
});
