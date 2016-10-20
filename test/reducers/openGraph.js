import { assert } from 'chai';
import openGraph from 'reducers/openGraph';
import mockOpenGraph from '../mocks/openGraph';

describe('Open Graph reducer', () => {
  it('handles the REQUEST_OPEN_GRAPH action', () => {
    const actual = openGraph({}, {
      type: 'REQUEST_OPEN_GRAPH'
    });
    const expected = {
      isLoading: true
    };

    assert.deepEqual(actual, expected);
  });

  it('handles the RECEIVE_OPEN_GRAPH action', () => {
    const actual = openGraph({ links: [] }, {
      type: 'RECEIVE_OPEN_GRAPH',
      openGraph: mockOpenGraph.data
    });

    const expected = Object.assign({}, {
      links: [{
        url: mockOpenGraph.data.url,
        og: mockOpenGraph.data
      }],
      isLoading: false
    });

    assert.deepEqual(actual, expected);
  });
});
