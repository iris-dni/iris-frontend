import chai from 'chai';
import PetitionsContainer from 'containers/Petitions';
import sinon from 'sinon';

const { assert } = chai;

function setupStore (counter = 0) {
  const store = {
    dispatch: sinon.spy()
  };

  return store;
}

describe('PetitionsContainer', () => {
  it('contains a fetchData function', () => {
    const result = PetitionsContainer.fetchData;
    const actual = typeof result;
    const expected = 'function';

    assert.equal(actual, expected);
  });

  it('fetchData function dispatches an action', () => {
    const store = setupStore();
    const location = { query: {} };
    PetitionsContainer.fetchData({ store, location });

    assert.isTrue(store.dispatch.calledOnce);
  });
});
