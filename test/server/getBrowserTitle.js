import chai from 'chai';
import getBrowserTitle, { TITLE_TEMPLATE } from 'server/getBrowserTitle';
import mockPetition from '../mocks/petition';
import mockPetitions from '../mocks/petitions';
import mockCity from '../mocks/city';

const { assert } = chai;

describe('getBrowserTitle', () => {
  it('exports TITLE_TEMPLATE', () => {
    const actual = TITLE_TEMPLATE;
    const expected = '%s | iris-frontend';

    assert.equal(actual, expected);
  });

  it('returns default title without args', () => {
    const actual = getBrowserTitle();
    const expected = 'iris-frontend';

    assert.equal(actual, expected);
  });

  it('returns correctly for PetitionContainer', () => {
    const actual = getBrowserTitle('PetitionContainer', {
      petition: mockPetition.data
    });
    const expected = 'Quo iste quidem itaque eius. | iris-frontend';

    assert.equal(actual, expected);
  });

  context('for PetitionsContainer', () => {
    it('returns default title correctly', () => {
      const actual = getBrowserTitle('PetitionsContainer', {
        petitions: mockPetitions.data
      });
      const expected = 'Browse petitions | iris-frontend';

      assert.equal(actual, expected);
    });

    it('returns correctly with city filter', () => {
      const actual = getBrowserTitle('PetitionsContainer', {
        petitions: Object.assign({},
          mockPetitions.data, {
            currentCity: mockCity
          })
      });
      const expected = 'Browse petitions in Aarau | iris-frontend';

      assert.equal(actual, expected);
    });

    it('returns correctly with state filter', () => {
      const actual = getBrowserTitle('PetitionsContainer', {
        petitions: Object.assign({},
          mockPetitions.data, {
            params: { state: 'running' }
          })
      });
      const expected = 'Browse running petitions | iris-frontend';

      assert.equal(actual, expected);
    });

    it('returns correctly with both filters', () => {
      const actual = getBrowserTitle('PetitionsContainer', {
        petitions: Object.assign({},
          mockPetitions.data, {
            currentCity: mockCity,
            params: { state: 'running' }
          })
      });
      const expected = 'Browse running petitions in Aarau | iris-frontend';

      assert.equal(actual, expected);
    });
  });

  it('returns correctly for NewPetitionContainer', () => {
    const actual = getBrowserTitle('NewPetitionContainer', {
      petition: mockPetitions.data
    });
    const expected = 'Create a new Petition | iris-frontend';

    assert.equal(actual, expected);
  });

  it('returns correctly for EditPetitionContainer', () => {
    const actual = getBrowserTitle('EditPetitionContainer', {
      petition: mockPetitions.data
    });
    const expected = 'Edit Petition | iris-frontend';

    assert.equal(actual, expected);
  });
});
