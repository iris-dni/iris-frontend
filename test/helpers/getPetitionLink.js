import { assert } from 'chai';
import getPetitionLink from 'helpers/getPetitionLink';

describe('getPetitionLink', () => {
  it('returns the url to the petition with the given id', () => {
    const id = 'abc123';
    const actual = getPetitionLink(id);
    const expected = `http://localhost:8000/petitions/${id}`;

    assert.equal(actual, expected);
  });
});
