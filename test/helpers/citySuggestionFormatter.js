import { assert } from 'chai';
import citySuggestionFormatter from 'helpers/citySuggestionFormatter';

describe('citySuggestionFormatter', () => {
  context('for a suggestion without name', () => {
    const suggestion = { zips: [12345, 67890] };

    it('returns an empty string', () => {
      const actual = citySuggestionFormatter(suggestion);
      const expected = '';

      assert.equal(actual, expected);
    });
  });

  context('for a suggestion without zips', () => {
    const suggestion = { name: 'City-Ville' };

    it('returns an empty string', () => {
      const actual = citySuggestionFormatter(suggestion);
      const expected = '';

      assert.equal(actual, expected);
    });
  });

  context('for a suggestion with name and zips', () => {
    const suggestion = {
      name: 'City-Ville',
      zips: [12345, 67890]
    };

    it('returns the name joined with the first zip', () => {
      const actual = citySuggestionFormatter(suggestion);
      const expected = 'City-Ville - 12345';

      assert.equal(actual, expected);
    });
  });
});
