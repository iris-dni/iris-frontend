import { assert } from 'chai';
import solveResolvedObjects from 'helpers/solveResolvedObjects';

describe('solveResolvedObjects', () => {
  it('merges city, owner and links of the given petition into the response data', () => {
    const petition = {
      city: 'petition city',
      owner: 'petition owner',
      links: 'petition links',
      otherAttribute: 'something else'
    };

    const petitionResponse = {
      id: '123abc',
      city: 'other city',
      owner: 'other owner',
      links: 'other links'
    };

    const actual = solveResolvedObjects(petition, petitionResponse);
    const expected = {
      city: 'petition city',
      owner: 'petition owner',
      links: 'petition links',
      id: '123abc'
    };

    assert.deepEqual(actual, expected);
  });
});
