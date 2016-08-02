import chai from 'chai';
import PetitionContainer from 'containers/Petition';
import sinon from 'sinon';

const { assert } = chai;

function setupStore (counter = 0) {
  const store = {
    dispatch: sinon.spy()
  };

  return store;
}

describe('PetitionContainer', () => {
  it('contains a fetchData function', () => {
    const result = PetitionContainer.fetchData;
    const actual = typeof result;
    const expected = 'function';

    assert.equal(actual, expected);
  });

  it('fetchData function dispatches an action', () => {
    const store = setupStore();
    const params = { id: 2 };
    PetitionContainer.fetchData({ store, params });

    assert.isTrue(store.dispatch.calledOnce);
  });
});
