import { assert } from 'chai';
import getPetitionSupporters from 'selectors/petitionSupporters';
import mockPetition from '../mocks/petition';

describe('petitionSupporters selector', () => {
  it('returns `total` key', () => {
    const result = getPetitionSupporters();
    const actual = result.hasOwnProperty('total');
    assert.isTrue(actual);
  });

  it('returns `required` key', () => {
    const result = getPetitionSupporters();
    const actual = result.hasOwnProperty('total');
    assert.isTrue(actual);
  });

  it('returns `total` from petition', () => {
    const result = getPetitionSupporters(mockPetition.data);
    const actual = result.total;
    const expected = 13;

    assert.equal(actual, expected);
  });

  it('returns `required` from petition', () => {
    const result = getPetitionSupporters(mockPetition.data);
    const actual = result.required;
    const expected = 10;

    assert.equal(actual, expected);
  });
});
