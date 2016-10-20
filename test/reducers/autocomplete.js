import { assert } from 'chai';
import autocomplete from 'reducers/autocomplete';
import mockSuggestions from '../mocks/suggestions';

describe('autocomplete reducer', () => {
  it('handles the UPDATE_SUGGESTIONS action', () => {
    const result = autocomplete({}, {
      type: 'UPDATE_SUGGESTIONS',
      suggestions: mockSuggestions
    });
    const actual = result.suggestions;
    const expected = mockSuggestions;

    assert.deepEqual(actual, expected);
  });

  it('handles the CLEAR_SUGGESTIONS action', () => {
    const result = autocomplete({}, {
      type: 'CLEAR_SUGGESTIONS'
    });
    const actual = result.suggestions;
    const expected = [];

    assert.deepEqual(actual, expected);
  });

  it('handles the UPDATE_SUGGESTION_INPUT_VALUE action', () => {
    const result = autocomplete({}, {
      type: 'UPDATE_SUGGESTION_INPUT_VALUE',
      value: 'the new input value'
    });
    const actual = result.value;
    const expected = 'the new input value';

    assert.equal(actual, expected);
  });

  it('provides fallback state', () => {
    const state = {};
    const actual = autocomplete(state, {
      type: 'NON_EXISTING_ACTION'
    });
    const expected = state;

    assert.deepEqual(actual, expected);
  });
});
