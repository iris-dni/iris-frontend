import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
import sinon from 'sinon';
import Counter from 'components/Counter';

const { assert } = chai;

function setup (counter = 0) {
  const actions = {
    plus: sinon.spy(),
    minus: sinon.spy()
  };

  const component = shallow(
    <Counter counter={counter} {...actions} />
  );

  return {
    actions: actions,
    component: component,
    buttons: component.find('button')
  };
}

describe('<Counter />', () => {
  it('calls plus on clicking the first button', () => {
    const { buttons, actions } = setup();
    buttons.at(0).simulate('click');

    assert.isTrue(actions.plus.calledOnce);
  });

  it('calls minus on clicking the second button', () => {
    const { buttons, actions } = setup();
    buttons.at(1).simulate('click');

    assert.isTrue(actions.minus.calledOnce);
  });

  it('displays a title', () => {
    const counter = 10;
    const { component } = setup(counter);

    const expected = `Redux counter ${counter}`;
    const actual = component.find('span').at(0).text();

    assert.equal(actual, expected);
  });
});
