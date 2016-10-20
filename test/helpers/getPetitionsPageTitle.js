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

  it('ignores state when === \'current\'', () => {
    const actual = getPetitionsPageTitle({
      params: { state: 'current' }
    });
    const expected = 'Browse petitions';

    assert.equal(actual, expected);
  });

  it('returns appended past state when given', () => {
    const actual = getPetitionsPageTitle({
      params: { state: 'past' }
    });
    const expected = 'Browse past petitions';

    assert.equal(actual, expected);
  });

  it('returns appended all state when given', () => {
    const actual = getPetitionsPageTitle({
      params: { state: 'all' }
    });
    const expected = 'Browse all petitions';

    assert.equal(actual, expected);
  });

  it('combines state and city correctly', () => {
    const actual = getPetitionsPageTitle({
      currentCity: city,
      params: { state: 'past' }
    });
    const expected = 'Browse past petitions in Aarau';

    assert.equal(actual, expected);
  });
});
