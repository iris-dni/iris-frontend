import { assert } from 'chai';
import getPetitionURL from 'helpers/getPetitionURL';

describe('getPetitionURL', () => {
  it('returns the url to the petition with the given id', () => {
    const id = 'abc123';
    const actual = getPetitionURL(id);
    const expected = `http://localhost:8000/petitions/${id}`;

    assert.equal(actual, expected);
  });
});
