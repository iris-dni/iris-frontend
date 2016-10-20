import { assert } from 'chai';
import RespondToPetitionContainer from 'containers/RespondToPetition';
import sinon from 'sinon';

function setupStore (counter = 0) {
  const store = {
    dispatch: sinon.spy()
  };

  return store;
}

describe('RespondToPetitionContainer', () => {
  it('contains a fetchData function', () => {
    const result = RespondToPetitionContainer.fetchData;
    const actual = typeof result;
    const expected = 'function';

    assert.equal(actual, expected);
  });

  it('fetchData function dispatches an action', () => {
    const store = setupStore();
    const params = { token: '1C9LQ' };
    RespondToPetitionContainer.fetchData({ store, params });

    assert.isTrue(store.dispatch.calledOnce);
  });
});
