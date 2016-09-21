import { assert } from 'chai';
import getPetitionsPageTitle from 'helpers/getPetitionsPageTitle';
import city from '../mocks/city';

describe('getPetitionsPageTitle', () => {
  it('returns a basic title witout city or params', () => {
    const actual = getPetitionsPageTitle({});
    const expected = 'Browse petitions';

    assert.equal(actual, expected);
  });

  it('returns appended city when given', () => {
    const actual = getPetitionsPageTitle({
      currentCity: city
    });
    const expected = 'Browse petitions in Aarau';

    assert.equal(actual, expected);
  });

  it('returns appended winning state when given', () => {
    const actual = getPetitionsPageTitle({
      params: { state: 'winning' }
    });
    const expected = 'Browse winning petitions';

    assert.equal(actual, expected);
  });

  it('returns appended running state when given', () => {
    const actual = getPetitionsPageTitle({
      params: { state: 'running' }
    });
    const expected = 'Browse running petitions';

    assert.equal(actual, expected);
  });

  it('ignores state when === \'all\'', () => {
    const actual = getPetitionsPageTitle({
      params: { state: 'all' }
    });
    const expected = 'Browse petitions';

    assert.equal(actual, expected);
  });

  it('combines state and city correctly', () => {
    const actual = getPetitionsPageTitle({
      currentCity: city,
      params: { state: 'running' }
    });
    const expected = 'Browse running petitions in Aarau';

    assert.equal(actual, expected);
  });
});
