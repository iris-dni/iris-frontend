import chai from 'chai';
import getPetitionMetaData from 'helpers/getPetitionMetaData';
import mockPetition from '../mocks/petition';

const { assert } = chai;

describe('getPetitionMetaData', () => {
  let metaData = getPetitionMetaData(mockPetition.data);

  it('returns key from basic meta data', () => {
    const result = metaData.filter(item => item.name === 'description');
    const actual = result.length;
    const expected = 1;

    assert.equal(actual, expected);
  });

  it('returns key from OG data', () => {
    const result = metaData.filter(item => item.property === 'og:description');
    const actual = result.length;
    const expected = 1;

    assert.equal(actual, expected);
  });

  it('returns key from twitter card data', () => {
    const result = metaData.filter(item => item.name === 'twitter:description');
    const actual = result.length;
    const expected = 1;

    assert.equal(actual, expected);
  });
});
