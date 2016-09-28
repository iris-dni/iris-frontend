import chai from 'chai';
import mailToLink from 'helpers/sharing/mailToLink';

const { assert } = chai;

describe('mailToLink', () => {
  it('returns all mail params', () => {
    const actual = mailToLink({});
    const expected = 'mailto:?subject=&body=';

    assert.equal(actual, expected);
  });

  it('passes `mailto` param', () => {
    const actual = mailToLink({
      mailto: 'hello@world.co.uk'
    });
    const expected = 'mailto:hello@world.co.uk?subject=&body=';

    assert.equal(actual, expected);
  });

  it('passes encoded `subject` param', () => {
    const actual = mailToLink({
      subject: 'Email subject'
    });
    const expected = 'mailto:?subject=Email%20subject&body=';

    assert.equal(actual, expected);
  });

  it('passes encoded `body` param', () => {
    const actual = mailToLink({
      body: 'http://foobar.co.uk'
    });
    const expected = 'mailto:?subject=&body=http://foobar.co.uk';

    assert.equal(actual, expected);
  });
});
