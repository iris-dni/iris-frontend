import chai from 'chai';
import getPetitionCity from 'selectors/petitionCity';
import mockPetition from '../mocks/petition';

const { assert } = chai;

describe('getPetitionCity', () => {
  it('returns name correctly', () => {
    const actual = getPetitionCity(mockPetition.data);
    const expected = 'Clinemouth';

    assert.equal(actual, expected);
  });

  it('returns empty string as fallback', () => {
    const actual = getPetitionCity({});
    const expected = '';

    assert.equal(actual, expected);
  });
});
