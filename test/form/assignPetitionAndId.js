import chai from 'chai';
import mockPetition from '../mocks/petition';
import assignPetitionAndId from 'form/assignPetitionAndId';

const { assert } = chai;

describe('assignPetitionData', () => {
  it('assigns id and merges under `petition` key', () => {
    const actual = assignPetitionAndId({
      title: 'Hello world'
    }, mockPetition.data);

    const expected = {
      petition: {
        id: mockPetition.data.id,
        title: 'Hello world'
      }
    };

    assert.deepEqual(actual, expected);
  });
});
