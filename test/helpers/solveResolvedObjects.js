import { assert } from 'chai';
import solveResolvedObjects from 'helpers/solveResolvedObjects';

describe('solveResolvedObjects', () => {
  it('merges city and owner of the given petition into the response data', () => {
    const petition = {
      city: 'petition city',
      owner: 'petition owner',
      otherAttribute: 'something else'
    };

    const petitionResponse = {
      id: '123abc',
      city: 'other city',
      owner: 'other owner'
    };

    const actual = solveResolvedObjects(petition, petitionResponse);
    const expected = {
      city: 'petition city',
      owner: 'petition owner',
      id: '123abc'
    };

    assert.deepEqual(actual, expected);
  });
});
