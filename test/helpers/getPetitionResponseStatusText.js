import { assert } from 'chai';
import getPetitionResponseStatusText from 'helpers/getPetitionResponseStatusText';

describe('getPetitionsPageText', () => {
  it('returns the title for a pending response', () => {
    const actual = getPetitionResponseStatusText({
      pending: true,
      amount: 100,
      required: 50,
      daysPending: 10
    });
    const expected = 'This petition reached its target goal of 50 votes and is awaiting response since **10** days ago.';

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
    const expected = 'This petition reached its target goal of 50 votes and has already been answered by Jane Doe, Mayor.\n\n<a href="#response">View official reply</a>.';

    assert.equal(actual, expected);
  });
});
