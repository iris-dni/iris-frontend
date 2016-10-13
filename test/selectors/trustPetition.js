import chai from 'chai';
import getTrustPetition from 'selectors/trustPetition';
import mockPetition from '../mocks/petition';
import mockSupportablePetition from '../mocks/petitionSupportable';

const { assert } = chai;

describe('trustPetition selector', () => {
  it('returns title correctly', () => {
    const result = getTrustPetition(mockPetition.data);
    const actual = result.title;
    const expected = 'Quo iste quidem itaque eius.';

    assert.equal(actual, expected);
  });

  it('returns id correctly', () => {
    const result = getTrustPetition(mockPetition.data);
    const actual = result.id;
    const expected = '7UV7m';

    assert.equal(actual, expected);
  });

  context('with a draft petition', () => {
    const result = getTrustPetition(mockPetition.data);
    const actual = result.isSupportable;

    it('returns isSupportable as false', () => assert.isFalse(actual));
  });

  context('with a published petition', () => {
    const result = getTrustPetition(mockSupportablePetition.data);
    const actual = result.isSupportable;

    it('returns isSupportable as true', () => assert.isTrue(actual));
  });
});
