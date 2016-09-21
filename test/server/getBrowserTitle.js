import chai from 'chai';
import getBrowserTitle, { TITLE_TEMPLATE } from 'server/getBrowserTitle';
import mockPetition from '../mocks/petition';
import mockPetitions from '../mocks/petitions';

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

  it('returns correctly for PetitionsContainer', () => {
    const actual = getBrowserTitle('PetitionsContainer', {
      petitions: mockPetitions.data
    });
    const expected = 'Browse petitions | iris-frontend';

    assert.equal(actual, expected);
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
