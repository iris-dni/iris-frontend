import { assert } from 'chai';
import petitionResponse from 'reducers/petitionResponse';
import mockPetition from '../mocks/petition';

describe('petitionResponse reducer', () => {
  it('handles the REQUEST_PETITION action', () => {
    const actual = petitionResponse({}, {
      type: 'REQUEST_PETITION'
    });
    const expected = {
      isLoading: true
    };

    assert.deepEqual(actual, expected);
  });

  it('handles the RECEIVE_PETITION action', () => {
    const exampleToken = '1JWSF';
    const exampleAnswer = { text: 'Example answer text', name: 'Jane Doe, Mayor' };
    const examplePetition = {
      ...mockPetition.data,
      token: exampleToken,
      city_answer: exampleAnswer
    };

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

  it('provides fallback state', () => {
    const actual = petitionResponse(undefined, {});
    const expected = {};

    assert.deepEqual(actual, expected);
  });
});
