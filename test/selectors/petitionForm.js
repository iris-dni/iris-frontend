import { assert } from 'chai';
import getPetionForm from 'selectors/petitionForm';

describe('getPetionForm', () => {
  let subject;

  context('with a new petition', () => {
    subject = getPetionForm({});

    describe('persisted', () => {
      const actual = subject.persisted;
      const expected = false;

      it('is false', () => {
        assert.equal(actual, expected);
      });
    });

    describe('published', () => {
      const actual = subject.published;
      const expected = false;

      it('is false', () => {
        assert.equal(actual, expected);
      });
    });
  });

  context('with a newly created petition', () => {
    subject = getPetionForm({ id: 2 });

    describe('persisted', () => {
      const actual = subject.persisted;
      const expected = true;

      it('is true', () => {
        assert.equal(actual, expected);
      });
    });

    describe('published', () => {
      const actual = subject.published;
      const expected = false;

      it('is false', () => {
        assert.equal(actual, expected);
      });
    });
  });

  context('with a published petition', () => {
    subject = getPetionForm({ id: 2, state: { name: 'pending', parent: 'supportable' } });

    describe('persisted', () => {
      const actual = subject.persisted;
      const expected = true;

      it('is true', () => {
        assert.equal(actual, expected);
      });
    });

    describe('published', () => {
      const actual = subject.published;
      const expected = true;

      it('is true', () => {
        assert.equal(actual, expected);
      });
    });
  });

  context('with a petition with title', () => {
    subject = getPetionForm({ title: 'A Title' });

    it('equals the title', () => {
      const actual = subject.title;
      const expected = 'A Title';

      assert.equal(actual, expected);
    });
  });
});
