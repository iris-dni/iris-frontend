import { assert } from 'chai';
import sinon from 'sinon';
import moment from 'moment';
import getPetitionResponseStatusText from 'helpers/getPetitionResponseStatusText';
import mockPetitionClosed from '../mocks/petitionClosed';
import mockPetitionProcessing from '../mocks/petitionProcessing';

describe('getPetitionResponseStatusText', () => {
  beforeEach(() => {
    const fakeTimeNow = moment('2016-11-04').valueOf();
    sinon.useFakeTimers(fakeTimeNow);
  });

  it('returns the title for a pending response', () => {
    const actual = getPetitionResponseStatusText(mockPetitionProcessing.data);
    const expected = 'This petition reached its target of **30** supporters and has been awaiting an official response for **12** days.';

    assert.equal(actual, expected);
  });

  it('returns the title for an arrived response, with link', () => {
    const actual = getPetitionResponseStatusText(mockPetitionClosed.data);
    const expected = 'This petition reached its target of **30** supporters and has been officially answered by Jane Doe, Mayor.';

    assert.equal(actual, expected);
  });
});
