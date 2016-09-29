import { assert } from 'chai';
import getPetitionResponseStatusTitle from 'helpers/getPetitionResponseStatusTitle';

describe('getPetitionsPageTitle', () => {
  it('returns the title for a pending response', () => {
    const actual = getPetitionResponseStatusTitle({ pending: true });
    const expected = 'Pending response from Gemeinde';

    assert.equal(actual, expected);
  });

  it('returns the title for an arrived response', () => {
    const actual = getPetitionResponseStatusTitle({ pending: false });
    const expected = 'Response from Gemeinde';

    assert.equal(actual, expected);
  });
});
