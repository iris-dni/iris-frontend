import chai from 'chai';
import mockPetition from '../mocks/petition';
import mockUser from '../mocks/user';
import assignPetitionData from 'form/assignPetitionData';

const { assert } = chai;

describe('assignPetitionData', () => {
  it('assigns data to `petition` key', () => {
    const actual = assignPetitionData({
      user: mockUser
    }, mockPetition.data);

    const expected = {
      user: mockUser,
      petition: mockPetition.data
    };

    assert.deepEqual(actual, expected);
  });
});
