import { assert } from 'chai';
import sinon from 'sinon';

import {
  updateSuggestions,
  clearSuggestions,
  updateSuggestionInputValue,
  typeaheadSearch
} from 'actions/AutocompleteActions';

describe('AutocompleteActions', () => {
  describe('typeaheadSearch', () => {
    it('returns a function that returns undefined if the endpoint doesn‘t match a repository', () => {
      const result = typeaheadSearch('unmatchingendpoint', 'aa')();

      assert.isNotOk(result);
    });

    it('returns a function that returns a promise that dispatches updateSuggestions()', done => {
      const dispatch = sinon.spy();
      const result = typeaheadSearch('cities', '❌❌❌');

      result(dispatch).then(() => {
        assert(dispatch.calledWith(updateSuggestions([])));
      }).then(done, done);
    });
  });

  describe('updateSuggestions', () => {
    it('returns UPDATE_SUGGESTIONS action', () => {
      const result = updateSuggestions();
      const actual = result.type;
      const expected = 'UPDATE_SUGGESTIONS';

      assert.equal(actual, expected);
    });
  });

  describe('clearSuggestions', () => {
    it('returns CLEAR_SUGGESTIONS action', () => {
      const result = clearSuggestions();
      const actual = result.type;
      const expected = 'CLEAR_SUGGESTIONS';

      assert.equal(actual, expected);
    });
  });

  describe('updateSuggestionInputValue', () => {
    it('returns UPDATE_SUGGESTION_INPUT_VALUE action', () => {
      const result = updateSuggestionInputValue();
      const actual = result.type;
      const expected = 'UPDATE_SUGGESTION_INPUT_VALUE';

      assert.equal(actual, expected);
    });
  });
});
