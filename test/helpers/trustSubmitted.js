import { assert } from 'chai';
import trustSubmitted from 'helpers/trustSubmitted';

describe('trustSubmitted', () => {
  context('with no petitionId in trust object', () => {
    const actual = trustSubmitted({
      id: 'abc'
    }, {
      hasSubmitted: true,
      isSubmitting: false
    });

    it('is false', () => {
      assert.isFalse(actual);
    });
  });

  context('with mismatched petiton IDs', () => {
    const actual = trustSubmitted({
      id: 'abc'
    }, {
      petitionId: 'abcd',
      hasSubmitted: true,
      isSubmitting: false
    });

    it('is false', () => {
      assert.isFalse(actual);
    });
  });

  context('with matching petiton IDs', () => {
    const actual = trustSubmitted({
      id: 'abc'
    }, {
      petitionId: 'abc',
      hasSubmitted: true,
      isSubmitting: false
    });

    it('is true', () => {
      assert.isTrue(actual);
    });
  });

  context('when trust is submitting', () => {
    const actual = trustSubmitted({
      id: 'abc'
    }, {
      petitionId: 'abc',
      hasSubmitted: true,
      isSubmitting: true
    });

    it('is false', () => {
      assert.isFalse(actual);
    });
  });

  context('when trust has not submitted', () => {
    const actual = trustSubmitted({
      id: 'abc'
    }, {
      petitionId: 'abc',
      hasSubmitted: false,
      isSubmitting: false
    });

    it('is false', () => {
      assert.isFalse(actual);
    });
  });
});
