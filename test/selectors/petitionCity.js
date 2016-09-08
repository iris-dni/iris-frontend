import chai from 'chai';
import getPetitionCity from 'selectors/petitionCity';
import mockPetition from '../mocks/petition';

const { assert } = chai;

describe('getPetitionCity', () => {
  it('returns name correctly', () => {
    const result = getPetitionCity(mockPetition.data);
    const actual = result.indexOf('Clinemouth') > -1;

    assert.isTrue(actual);
  });

  it('returns zip correctly', () => {
    const result = getPetitionCity(mockPetition.data);
    const actual = result.indexOf('17839') > -1;

    assert.isTrue(actual);
  });

  it('returns empty string as fallback', () => {
    const actual = getPetitionCity({});
    const expected = '';

    assert.equal(actual, expected);
  });
});
