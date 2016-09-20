import { assert } from 'chai';
import getPetitionPath from 'helpers/getPetitionPath';

describe('getPetitionPath', () => {
  it('returns the path to the petition with the given id', () => {
    const id = 'abc123';
    const actual = getPetitionPath(id);
    const expected = `/petitions/${id}`;

    assert.equal(actual, expected);
  });
});
