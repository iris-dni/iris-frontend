import chai from 'chai';
import getPetitionTweetText from 'helpers/sharing/getPetitionTweetText';
import mockPetition from '../../mocks/petition';
import mockPetitionWithoutCity from '../../mocks/petitionWithoutCity';

const { assert } = chai;

describe('getPetitionTweetText', () => {
  context('without a city', () => {
    const actual = getPetitionTweetText(mockPetitionWithoutCity.data);
    const expected = 'This petition needs your support:';

    it('text returned from settings', () => assert.equal(actual, expected));
  });

  context('with a city', () => {
    it('subject contains city name', () => {
      const result = getPetitionTweetText(mockPetition.data);
      const actual = result.indexOf('Clinemouth') > -1;

      assert.isTrue(actual);
    });

    it('subject contains city zip', () => {
      const result = getPetitionTweetText(mockPetition.data);
      const actual = result.indexOf('17839') > -1;

      assert.isTrue(actual);
    });
  });

  context('with a modal type', () => {
    const actual = getPetitionTweetText(mockPetitionWithoutCity.data, 'published');
    const expected = 'I just created a new petition!';

    it('contextual text returned from settings', () => assert.equal(actual, expected));
  });
});
