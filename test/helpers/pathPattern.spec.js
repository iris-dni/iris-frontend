import chai from 'chai';
import pattern from 'helpers/pathPattern';

const { assert } = chai;

describe('path-pattern', () => {
  describe('.match', () => {
    context('if the path matches the pattern', () => {
      let id = '1';
      let path = `/resource/${id}`;
      let patternPath = '/resource/:id';

      it('returns the parameters object', () => {
        const actual = pattern.match(path, patternPath);
        const expected = { id: id };

        assert.deepEqual(actual, expected);
      });
    });

    context('if the path does not match the pattern', () => {
      let path = '/a/path';
      let patternPath = '/some/:other/pattern/';

      it('returns null', () => {
        const match = pattern.match(path, patternPath);

        assert.isNull(match);
      });
    });
  });

  describe('.stringify', () => {
    context('with given params', () => {
      let params = { id: '1' };
      let patternPath = '/resource/:id';

      it('returns the path with params', () => {
        const actual = pattern.stringify(patternPath, params);
        const expected = `/resource/${params.id}`;

        assert.equal(actual, expected);
      });
    });

    context('without params for optional params', () => {
      let patternPath = '/resource(/:id)';

      it('returns the path without params', () => {
        const actual = pattern.stringify(patternPath, null);
        const expected = '/resource';

        assert.equal(actual, expected);
      });
    });

    context('without params for mandatory params', () => {
      let patternPath = '/resource/:id';

      it('throws an error', () => {
        const fn = () => {
          pattern.stringify(patternPath, null);
        };

        const error = 'no values provided for key `id`';

        assert.throws(fn, error);
      });
    });
  });
});
