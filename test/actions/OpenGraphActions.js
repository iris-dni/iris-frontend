import { assert } from 'chai';
import sinon from 'sinon';
import moxios from 'moxios';
import mockOpenGraph from '../mocks/openGraph';

import {
  fetchOpenGraph,
  requestOpenGraph,
  receiveOpenGraph
} from 'actions/OpenGraphActions.js';

describe('OpenGraphActions', () => {
  describe('fetchOpenGraph', () => {
    let dispatch;
    let result;

    beforeEach(() => {
      dispatch = sinon.spy();

      moxios.install();
      moxios.stubRequest(/.*/, {
        status: 200,
        response: { data: mockOpenGraph }
      });

      result = fetchOpenGraph(mockOpenGraph.data.url);
    });

    afterEach(() => {
      moxios.uninstall();
    });

    it('returns a function that dispatches requestOpenGraph()', () => {
      result(dispatch);
      assert(dispatch.calledWith(requestOpenGraph()));
    });

    it('returns a function that returns a promise that dispatches receiveOpenGraph()', done => {
      result(dispatch).then(() => {
        assert(dispatch.calledWith(receiveOpenGraph(mockOpenGraph)));
      }).then(done, done);
    });
  });

  describe('requestOpenGraph', () => {
    it('returns REQUEST_OPEN_GRAPH action', () => {
      const result = requestOpenGraph();
      const actual = result.type;
      const expected = 'REQUEST_OPEN_GRAPH';

      assert.equal(actual, expected);
    });
  });

  describe('receiveOpenGraph', () => {
    it('returns RECEIVE_OPEN_GRAPH action', () => {
      const result = receiveOpenGraph();
      const actual = result.type;
      const expected = 'RECEIVE_OPEN_GRAPH';

      assert.equal(actual, expected);
    });

    it('passes Open Graph object', () => {
      const result = receiveOpenGraph(mockOpenGraph);
      const actual = result.openGraph;
      const expected = mockOpenGraph;

      assert.deepEqual(actual, expected);
    });
  });
});
