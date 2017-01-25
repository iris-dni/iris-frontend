import { assert } from 'chai';
import petitionResponse from 'reducers/petitionResponse';
import mockPetition from '../mocks/petition';

describe('petitionResponse reducer', () => {
  const exampleToken = '1JWSF';
  const exampleAnswer = { text: 'Example answer text', name: 'Jane Doe, Mayor' };
  const examplePetition = {
    ...mockPetition.data,
    token: exampleToken,
    city_answer: exampleAnswer
  };

  it('handles the REQUEST_PETITION action', () => {
    const actual = petitionResponse({}, {
      type: 'REQUEST_PETITION'
    });
    const expected = {
      isLoading: true
    };

    assert.deepEqual(actual, expected);
  });

  it('handles the SUBMITTING_PETITION_RESPONSE action', () => {
    const actual = petitionResponse({}, {
      type: 'SUBMITTING_PETITION_RESPONSE'
    });
    const expected = {
      isLoading: true
    };

    assert.deepEqual(actual, expected);
  });

  it('handles the RECEIVE_PETITION action', () => {
    const actual = petitionResponse({}, {
      type: 'RECEIVE_PETITION',
      petition: examplePetition
    });
    const expected = Object.assign({}, {}, {
      petitionId: examplePetition.id,
      token: exampleToken,
      answer: exampleAnswer,
      isLoading: false,
      saved: false
    });

    assert.deepEqual(actual, expected);
  });

  it('handles the RESPONDED_TO_PETITION action', () => {
    const actual = petitionResponse({}, {
      type: 'RESPONDED_TO_PETITION',
      petition: examplePetition
    });
    const expected = Object.assign({}, {}, {
      petitionId: examplePetition.id,
      token: exampleToken,
      answer: exampleAnswer,
      isLoading: false,
      saved: true
    });

    assert.deepEqual(actual, expected);
  });

  it('handles the PETITION_NOT_FOUND action', () => {
    const stubPetition = { token: exampleToken };
    const actual = petitionResponse({}, {
      type: 'PETITION_NOT_FOUND',
      petition: stubPetition
    });

    const expected = Object.assign({}, {}, {
      isLoading: false,
      saved: false,
      token: exampleToken
    });

    assert.deepEqual(actual, expected);
  });

  it('provides fallback state', () => {
    const actual = petitionResponse(undefined, {});
    const expected = {};

    assert.deepEqual(actual, expected);
  });
});
