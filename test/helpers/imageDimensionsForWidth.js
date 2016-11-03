import { assert } from 'chai';
import imageDimensionsForWidth from 'helpers/imageDimensionsForWidth';

describe('imageDimensionsForWidth', () => {
  context('with a landscape image', () => {
    context('larger than new width', () => {
      it('returns correct dimensions', () => {
        const info = {
          width: 1200,
          height: 720
        };

        const actual = imageDimensionsForWidth({ data: { info } }, 800);
        const expected = {
          width: 800,
          height: 480
        };

        assert.deepEqual(actual, expected);
      });
    });

    context('smaller than new width', () => {
      it('returns correct dimensions', () => {
        const info = {
          width: 1200,
          height: 720
        };

        const actual = imageDimensionsForWidth({ data: { info } }, 1400);
        const expected = {
          width: 1200,
          height: 720
        };

        assert.deepEqual(actual, expected);
      });
    });
  });

  context('with a portrait image image', () => {
    context('larger than new width', () => {
      it('returns correct dimensions', () => {
        const info = {
          width: 400,
          height: 1000
        };

        const actual = imageDimensionsForWidth({ data: { info } }, 300);
        const expected = {
          width: 300,
          height: 750
        };

        assert.deepEqual(actual, expected);
      });
    });

    context('smaller than new width', () => {
      it('returns correct dimensions', () => {
        const info = {
          width: 400,
          height: 1000
        };

        const actual = imageDimensionsForWidth({ data: { info } }, 400);
        const expected = {
          width: 400,
          height: 1000
        };

        assert.deepEqual(actual, expected);
      });
    });
  });

  it('rounds image dimensions', () => {
    const info = {
      width: 400,
      height: 273
    };

    const actual = imageDimensionsForWidth({ data: { info } }, 300);
    const expected = {
      width: 300,
      height: 205
    };

    assert.deepEqual(actual, expected);
  });
});
