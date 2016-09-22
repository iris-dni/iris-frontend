import { assert } from 'chai';
import getPetitionHeader from 'selectors/petitionHeader';
import mockPetition from '../mocks/petition';

describe('getPetitionHeader', () => {
  it('returns `title` key', () => {
    const result = getPetitionHeader();
    const actual = result.hasOwnProperty('title');
    assert.isTrue(actual);
  });

  it('returns `total` from petition', () => {
    const result = getPetitionHeader(mockPetition.data);
    const actual = result.title;
    const expected = 'Quo iste quidem itaque eius.';

    assert.equal(actual, expected);
  });
});
