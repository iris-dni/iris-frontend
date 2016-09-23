import chai from 'chai';
import getOpenGraphData from 'server/getOpenGraphData';
import mockPetition from '../mocks/petition';
import mockOpenGraph from '../mocks/petitionOpenGraph';
const { assert } = chai;

describe('getOpenGraphData', () => {
  it('returns default OG data without args', () => {
    const actual = getOpenGraphData();
    const expected = [];

    assert.deepEqual(actual, expected);
  });

  it('returns correctly for PetitionContainer', () => {
    const actual = getOpenGraphData('PetitionContainer', {
      petition: mockPetition.data
    });
    const expected = mockOpenGraph;

    assert.deepEqual(actual, expected);
  });
});
