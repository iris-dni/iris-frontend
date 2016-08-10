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
      petition: mockPetitions.data
    });
    const expected = 'Petitions | iris-frontend';

    assert.equal(actual, expected);
  });
});
