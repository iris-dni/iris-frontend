import { assert } from 'chai';
import paramsHaveChanged from 'helpers/paramsHaveChanged';

describe('paramsHaveChanged helper', () => {
  context('with empty params', () => {
    it('returns false', () => {
      const actual = paramsHaveChanged({}, {});

      assert.isFalse(actual);
    });
  });

  context('with same params as params', () => {
    it('returns false', () => {
      const actual = paramsHaveChanged({
        params: {
          city: 'foo'
        }
      }, {
        params: {
          city: 'foo'
        }
      });

      assert.isFalse(actual);
    });
  });

  context('with same params as location.query', () => {
    it('returns false', () => {
      const actual = paramsHaveChanged({
        location: {
          query: {
            state: 'bar'
          }
        }
      }, {
        location: {
          query: {
            state: 'bar'
          }
        }
      });

      assert.isFalse(actual);
    });
  });

  context('with same params and location.query', () => {
    it('returns false', () => {
      const actual = paramsHaveChanged({
        params: {
          city: 'foo'
        },
        location: {
          query: {
            state: 'bar'
          }
        }
      }, {
        params: {
          city: 'foo'
        },
        location: {
          query: {
            state: 'bar'
          }
        }
      });

      assert.isFalse(actual);
    });
  });

  context('with differing params as params', () => {
    it('returns true', () => {
      const actual = paramsHaveChanged({
        params: {
          city: 'foo'
        }
      }, {
        params: {
          city: 'bar'
        }
      });

      assert.isTrue(actual);
    });
  });

  context('with differing params as location.query', () => {
    it('returns true', () => {
      const actual = paramsHaveChanged({
        location: {
          query: {
            state: 'foo'
          }
        }
      }, {
        location: {
          query: {
            state: 'bar'
          }
        }
      });

      assert.isTrue(actual);
    });
  });

  context('with same params and location.query', () => {
    it('returns true', () => {
      const actual = paramsHaveChanged({
        params: {
          city: 'foo'
        },
        location: {
          query: {
            state: 'bar'
          }
        }
      }, {
        params: {
          city: 'bar'
        },
        location: {
          query: {
            state: 'foo'
          }
        }
      });

      assert.isTrue(actual);
    });
  });
});
