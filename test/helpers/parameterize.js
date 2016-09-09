import { assert } from 'chai';
import parameterize from 'helpers/parameterize';

describe('parameterize', () => {
  it('replaces special characters', () => {
    const text = 'Zwölf Boxkämpfer jagen Viktor (23) über den großen Deich.';
    const actual = parameterize(text);
    const expected = 'zwoelf-boxkaempfer-jagen-viktor-23-ueber-den-grossen-deich';

    assert.equal(actual, expected);
  });
});
