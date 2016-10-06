import { assert } from 'chai';
import getPetitionResponseStatusText from 'helpers/getPetitionResponseStatusText';

describe('getPetitionResponseStatusText', () => {
  it('returns the title for a pending response', () => {
    const actual = getPetitionResponseStatusText({
      pending: true,
      amount: 100,
      required: 50,
      daysPending: 10
    });
    const expected = 'This petition reached its target of **50** supporters and has been awaiting an official response for **10** days.';

    assert.equal(actual, expected);
  });

  it('returns the title for an arrived response, with link', () => {
    const actual = getPetitionResponseStatusText({
      pending: false,
      amount: 100,
      required: 50,
      daysPending: 10,
      name: 'Jane Doe, Mayor'
    });
    const expected = 'This petition reached its target of **50** supporters and has been officially answered by Jane Doe, Mayor.';

    assert.equal(actual, expected);
  });
});
