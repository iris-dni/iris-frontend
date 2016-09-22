import chai from 'chai';
import getPetitionOpenGraph from 'selectors/petitionOpenGraph';
import mockPetition from '../mocks/petition';
import mockPetitionOpenGraph from '../mocks/petitionOpenGraph';

const { assert } = chai;

describe('getPetitionOpenGraph', () => {
  it('returns correct OG data', () => {
    const actual = getPetitionOpenGraph(mockPetition.data);
    const expected = mockPetitionOpenGraph;

    assert.deepEqual(actual, expected);
  });
});
