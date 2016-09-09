import chai from 'chai';
import getPetitionCity from 'selectors/petitionCity';
import mockPetition from '../mocks/petition';

const { assert } = chai;

describe('getPetitionCity', () => {
  it('returns label', () => {
    const actual = getPetitionCity(mockPetition.data).label;
    const expected = '17839 Clinemouth';

    assert.equal(actual, expected);
  });

  it('returns empty label string as fallback', () => {
    const actual = getPetitionCity({}).label;
    const expected = '';

    assert.equal(actual, expected);
  });
});
