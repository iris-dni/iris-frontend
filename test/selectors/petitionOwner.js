import chai from 'chai';
import getPetitionOwner from 'selectors/petitionOwner';
import mockPetition from '../mocks/petition';

const { assert } = chai;

describe('petitionOwner selector', () => {
  it('returns name from base object primarily', () => {
    const testOwnerPetition = {
      ...mockPetition.data,
      owner: {
        ...mockPetition.data.owner,
        firstname: 'Overwritten',
        lastname: 'Name'
      }
    };

    const actual = getPetitionOwner(testOwnerPetition);
    const expected = 'Overwritten Name';

    assert.equal(actual, expected);
  });

  it('returns name from `data` object otherwise', () => {
    const actual = getPetitionOwner(mockPetition.data);
    const expected = 'Stephanie Ballard';

    assert.equal(actual, expected);
  });

  it('returns empty string as fallback', () => {
    const actual = getPetitionOwner({});
    const expected = '';

    assert.equal(actual, expected);
  });
});
