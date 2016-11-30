import { assert } from 'chai';
import moxios from 'moxios';
import sinon from 'sinon';

import {
  updateSuggestions,
  clearSuggestions,
  updateSuggestionInputValue,
  typeaheadSearch
} from 'actions/AutocompleteActions';

describe('AutocompleteActions', () => {
  describe('typeaheadSearch', () => {
    let dispatch;
    let result;

    let mockSuggestions = {
      total: '2',
      data: [
        {
          'name': 'Aargau'
        },
        {
          'name': 'Basel'
        }
      ]
    };

    beforeEach(() => {
      dispatch = sinon.spy();

      moxios.install();
      moxios.stubRequest(/.*/, {
        status: 200,
        response: mockSuggestions
      });

      result = typeaheadSearch('cities', 'Bas');
    });

    afterEach(() => {
      moxios.uninstall();
    });

    it('returns a function that returns a promise that dispatches updateSuggestions()', done => {
      result(dispatch).then(() => {
        assert(dispatch.calledWith(updateSuggestions(mockSuggestions.data)));
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
