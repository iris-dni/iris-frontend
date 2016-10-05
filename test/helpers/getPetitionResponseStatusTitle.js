import { assert } from 'chai';
import getPetitionResponseStatusTitle from 'helpers/getPetitionResponseStatusTitle';

describe('getPetitionsPageTitle', () => {
  it('returns the title for a pending response', () => {
    const actual = getPetitionResponseStatusTitle({ pending: true });
    const expected = 'Pending official response';

    assert.equal(actual, expected);
  });

  it('returns the title for an arrived response', () => {
    const actual = getPetitionResponseStatusTitle({ pending: false });
    const expected = 'Official response';

    assert.equal(actual, expected);
  });
});
