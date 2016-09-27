import chai from 'chai';
import getPetitionMetaData from 'selectors/petitionMetaData';
import mockPetition from '../mocks/petition';
import mockPetitionMetaData from '../mocks/petitionMetaData';

const { assert } = chai;

describe('petitionMetaData selector', () => {
  it('returns correct meta data', () => {
    const actual = getPetitionMetaData(mockPetition.data);
    const expected = mockPetitionMetaData;

    assert.deepEqual(actual, expected);
  });

  it('fails silently', () => {
    const actual = getPetitionMetaData();
    const expected = [];

    assert.deepEqual(actual, expected);
  });
});
