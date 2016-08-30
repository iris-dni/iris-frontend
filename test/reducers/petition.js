import { assert } from 'chai';
import petition from 'reducers/petition';
import mockPetition from '../mocks/petition';

describe('petition reducer', () => {
  it('handles the RECEIVE_PETITION action', () => {
    const actual = petition({}, {
      type: 'RECEIVE_PETITION',
      petition: mockPetition.data
    });
    const expected = mockPetition.data;

    assert.deepEqual(actual, expected);
  });

  it('handles the CREATED_PETITION action', () => {
    const actual = petition({}, {
      type: 'CREATED_PETITION',
      petition: mockPetition.data
    });
    const expected = mockPetition.data;

    assert.deepEqual(actual, expected);
  });

  it('handles the UPDATED_PETITION action', () => {
    const actual = petition({}, {
      type: 'UPDATED_PETITION',
      petition: mockPetition.data
    });
    const expected = mockPetition.data;

    assert.deepEqual(actual, expected);
  });

  it('handles the PUBLISHED_PETITION action', () => {
    const actual = petition({}, {
      type: 'PUBLISHED_PETITION',
      petition: mockPetition.data
    });
    const expected = mockPetition.data;

    assert.deepEqual(actual, expected);
  });

  it('provides fallback state', () => {
    const actual = petition(undefined, {});
    const expected = {};

    assert.deepEqual(actual, expected);
  });
});
