import chai from 'chai';
import chaiThings from 'chai-things';
import stripProtocolFromURL from 'helpers/stripProtocolFromURL';

chai.use(chaiThings);
const { expect } = chai;

describe('calculateParamOffset', () => {
  it('returns protocol free URL for different URL values', () => {
    const URLs = [
      'iris.com',
      'www.iris.com',
      'http://iris.com',
      'http://www.iris.com',
      'https://iris.com',
      'https://www.iris.com'
    ];

    const URLResults = URLs.map(stripProtocolFromURL);
    const expected = 'iris.com';

    expect(URLResults).to.all.equal(expected);
  });
});
