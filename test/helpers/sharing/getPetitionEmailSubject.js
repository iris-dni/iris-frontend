import chai from 'chai';
import getPetitionEmailSubject from 'helpers/sharing/getPetitionEmailSubject';
import mockPetition from '../../mocks/petition';
import mockPetitionWithoutCity from '../../mocks/petitionWithoutCity';

const { assert } = chai;

describe('getPetitionEmailSubject', () => {
  context('without a city', () => {
    const actual = getPetitionEmailSubject(mockPetitionWithoutCity.data);
    const expected = 'This petition needs your support';

    it('subject returned from settings', () => assert.equal(actual, expected));
  });

  context('with a city', () => {
    it('subject contains city name', () => {
      const result = getPetitionEmailSubject(mockPetition.data);
      const actual = result.indexOf('Clinemouth') > -1;

      assert.isTrue(actual);
    });

    it('subject contains city zip', () => {
      const result = getPetitionEmailSubject(mockPetition.data);
      const actual = result.indexOf('17839') > -1;

      assert.isTrue(actual);
    });
  });

  context('with a modal type', () => {
    const actual = getPetitionEmailSubject(mockPetitionWithoutCity.data, 'published');
    const expected = 'I just created a new petition!';

    it('contextual subject returned from settings', () => assert.equal(actual, expected));
  });
});
