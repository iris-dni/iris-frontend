import { assert } from 'chai';
import getPetitionResponse, { translationForResponse } from 'selectors/petitionResponse';

describe('petionResponse selector', () => {
  context('with petition in state other than `closed`', () => {
    const actual = getPetitionResponse({
      state: { name: 'draft', parent: '' }
    });
    const expected = {};

    it('returns empty object', () => assert.deepEqual(actual, expected));
  });

  context('with petition in `closed` state and has `city_answer`', () => {
    const answer = { text: 'An official response', name: 'Bürgermeister' };
    const actual = getPetitionResponse({
      state: { name: 'closed', parent: '' },
      city_answer: answer
    });
    const expected = answer;

    it('returns the `city_answer`', () => assert.equal(actual, expected));
  });
});

describe('petionResponse selector', () => {
  context('with city answer not already submitted', () => {
    const actual = translationForResponse({
      hasCityAnswerAlreadySubmitted: false
    });

    const expected = {
      title: 'Sorry but this link doesn’t exist or is no longer working.',
      hint: 'Please re-enter the link or contact us if you believe there is a mistake or are unsure of how to proceed.',
      link: 'Go back home'
    };

    it('returns with correct translation', () => assert.deepEqual(actual, expected));
  });

  context('with city answer already submitted', () => {
    const actual = translationForResponse({
      hasCityAnswerAlreadySubmitted: true,
      petitionTitle: 'Petition Title'
    });

    const expected = {
      title: 'Answer already submitted',
      hint: 'An answer has already been submitted for the petition "Petition Title" via this URL',
      link: 'Go back home'
    };

    it('returns with correct translation', () => assert.deepEqual(actual, expected));
  });
});
