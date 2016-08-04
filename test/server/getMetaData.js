import chai from 'chai';
import getMetaData from 'server/getMetaData';

const { assert } = chai;

describe('getMetaData', () => {
  it('returns title key', () => {
    const result = getMetaData();
    const actual = result.hasOwnProperty('title');
    const expected = true;

    assert.equal(actual, expected);
  });

  it('title is a string', () => {
    const result = getMetaData('ComponentName', {});
    const actual = typeof result.title;
    const expected = 'string';

    assert.equal(actual, expected);
  });

  it('returns schema key', () => {
    const result = getMetaData();
    const actual = result.hasOwnProperty('schema');
    const expected = true;

    assert.equal(actual, expected);
  });

  it('schema is a JSON string', () => {
    const result = getMetaData('ComponentName', {});
    const actual = typeof result.schema;
    const expected = 'string';

    assert.equal(actual, expected);
  });
});
