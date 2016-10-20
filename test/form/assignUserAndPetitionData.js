import chai from 'chai';
import mockPetition from '../mocks/petition';
import mockUser from '../mocks/user';
import assignUserAndPetitionData from 'form/assignUserAndPetitionData';

const { assert } = chai;

describe('assignPetitionData', () => {
  it('assigns data under `petition` and `user` keys', () => {
    const actual = assignUserAndPetitionData({
      misc: {}
    }, mockUser, mockPetition.data);

    const expected = {
      misc: {},
      user: mockUser,
      petition: mockPetition.data
    };

    assert.deepEqual(actual, expected);
  });
});
