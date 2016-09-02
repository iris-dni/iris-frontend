import chai from 'chai';
import getPetitionOwner from 'selectors/petitionOwner';
import mockPetition from '../mocks/petition';

const { assert } = chai;

describe('getPetitionOwner', () => {
  it('returns name correctly', () => {
    const actual = getPetitionOwner(mockPetition.data);
    const expected = 'Stephanie Ballard';

    assert.equal(actual, expected);
  });

  it('returns empty string as fallback', () => {
    const actual = getPetitionOwner({});
    const expected = '';

    assert.equal(actual, expected);
  });
});
