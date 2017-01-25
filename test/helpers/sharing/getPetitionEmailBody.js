import chai from 'chai';
import getPetitionEmailBody from 'helpers/sharing/getPetitionEmailBody';
import mockPetition from '../../mocks/petition';
import mockPetitionWithoutCity from '../../mocks/petitionWithoutCity';

const { assert } = chai;

describe('getPetitionEmailBody', () => {
  context('without a city', () => {
    it('includes title from settings', () => {
      const result = getPetitionEmailBody(mockPetitionWithoutCity.data);
      const actual = result.indexOf('Get informed and support the following petition:') > -1;

      assert.isTrue(actual);
    });

    it('includes title of petition', () => {
      const result = getPetitionEmailBody(mockPetitionWithoutCity.data);
      const actual = result.indexOf(mockPetition.data.title) > -1;

      assert.isTrue(actual);
    });
  });

  context('with a city', () => {
    it('body contains city name', () => {
      const result = getPetitionEmailBody(mockPetition.data);
      const actual = result.indexOf('Clinemouth') > -1;

      assert.isTrue(actual);
    });

    it('body contains city zip', () => {
      const result = getPetitionEmailBody(mockPetition.data);
      const actual = result.indexOf('17839') > -1;

      assert.isTrue(actual);
    });

    it('body contains petition title', () => {
      const result = getPetitionEmailBody(mockPetition.data);
      const actual = result.indexOf(mockPetition.data.title) > -1;

      assert.isTrue(actual);
    });
  });

  context('with a modal type', () => {
    it('includes contextual title from settings', () => {
      const result = getPetitionEmailBody(mockPetitionWithoutCity.data, 'published');
      const actual = result.indexOf('Check out the petition and show your support:') > -1;

      assert.isTrue(actual);
    });
  });
});
