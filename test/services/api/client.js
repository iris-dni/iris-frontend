import { assert } from 'chai';
import moxios from 'moxios';
import ApiClient from 'services/api/client';

describe('API client', () => {
  let exampleData = { a: 1, b: '2', c: ['c1', 'c2'] };

  beforeEach(() => {
    moxios.install();
    moxios.stubRequest(/.*/, { status: 200 });
  });

  afterEach(() => {
    moxios.uninstall();
  });

  describe('request', () => {
    it('defaults to GET', (done) => {
      let expectedMethod = 'GET';

      ApiClient.request('/test').then((response) => {
        let request = moxios.requests.mostRecent();
        let actualMethod = request.config.method;

        assert.equal(actualMethod, expectedMethod);
        done();
      });
    });

    it('respects the method argument', (done) => {
      let expectedMethod = 'POST';

      ApiClient.request('/test', exampleData, 'POST').then((response) => {
        let request = moxios.requests.mostRecent();
        let actualMethod = request.config.method;

        assert.equal(actualMethod, expectedMethod);
        done();
      });
    });

    it('respects the headers argument', (done) => {
      let headers = { 'X-IRIS-APIKEY': 'abcd1234' };

      ApiClient.request('/test', exampleData, 'POST', headers).then((response) => {
        let request = moxios.requests.mostRecent();
        let actualHeaders = request.config.headers;
        let expectedProperty = 'X-IRIS-APIKEY';
        let expectedValue = 'abcd1234';

        assert.propertyVal(actualHeaders, expectedProperty, expectedValue);
        done();
      });
    });

    it('transforms data object to query string on GET requests', (done) => {
      let expectedUrl = /\/test\?a=1&b=2&c\[\]=c1&c\[\]=c2$/;
      let expectedData = '{}';

      ApiClient.request('/test', exampleData, 'GET').then((response) => {
        let request = moxios.requests.mostRecent();
        let actualUrl = request.config.url;
        let actualData = request.config.data;

        assert.match(actualUrl, expectedUrl);
        assert.deepEqual(actualData, expectedData);
        done();
      });
    });

    it('sends payload on POST requests', (done) => {
      let expectedUrl = /\/test$/;
      let expectedData = JSON.stringify(exampleData);

      ApiClient.request('/test', exampleData, 'POST').then((response) => {
        let request = moxios.requests.mostRecent();
        let actualUrl = request.config.url;
        let actualData = request.config.data;

        assert.match(actualUrl, expectedUrl);
        assert.deepEqual(actualData, expectedData);
        done();
      });
    });
  });
});
