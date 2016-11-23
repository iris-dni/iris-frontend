import { assert } from 'chai';
import getPetitionResponseStatusTitle from 'helpers/getPetitionResponseStatusTitle';
import mockPetitionClosed from '../mocks/petitionClosed';
import mockPetitionProcessing from '../mocks/petitionProcessing';

describe('getPetitionResponseStatusTitle', () => {
  it('returns the title for an arrived response', () => {
    const actual = getPetitionResponseStatusTitle(mockPetitionClosed.data);
    const expected = 'Official response';

    assert.equal(actual, expected);
  });

  it('returns the title for a pending response', () => {
    const actual = getPetitionResponseStatusTitle(mockPetitionProcessing.data);
    const expected = 'Pending official response';

    assert.equal(actual, expected);
  });
});
