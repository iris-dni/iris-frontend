import { assert } from 'chai';
import getPetitionPath from 'helpers/getPetitionPath';

describe('getPetitionPath', () => {
  it('returns the path to the given petition', () => {
    const petition = { id: 'abc123' };
    const actual = getPetitionPath(petition);
    const expected = `/petitions/${petition.id}`;

    assert.equal(actual, expected);
  });
});
