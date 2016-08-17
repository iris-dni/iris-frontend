import { assert } from 'chai';
import moxios from 'moxios';
import ApiClient from 'services/api/client';

describe('API client', () => {
  let exampleData = { a: 1, b: '2' };

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

    it('transforms data object to query string on GET requests', (done) => {
      let expectedUrl = /\/test\?a=1&b=2$/;
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

    it('wraps data on POST requests', (done) => {
      let expectedUrl = /\/test$/;
      let expectedData = JSON.stringify({ data: exampleData });

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
