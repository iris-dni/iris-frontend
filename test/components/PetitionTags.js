import React from 'react';
import { shallow } from 'enzyme';
import { assert } from 'chai';
import PetitionTags from 'components/PetitionTags';
import Icon from 'components/Icon';
import styles from 'components/PetitionTags/petition-tags.scss';

describe('<PetitionTags />', () => {
  it('does not render without a `winner` or `response`', () => {
    const wrapper = shallow(<PetitionTags />);
    const actual = wrapper.hasClass(`${styles.root}`);
    const expected = false;

    assert.equal(actual, expected);
  });

  it('renders the Winner tag if `winner` is true', () => {
    const wrapper = shallow(<PetitionTags winner response={{}} />);
    const hasText = wrapper.text().indexOf('Winner') > -1;
    const actual = wrapper.containsMatchingElement(Icon) && hasText;
    const expected = true;

    assert.equal(actual, expected);
  });

  it('renders the Response tag if `response` has text', () => {
    const response = { text: 'A response', name: 'Mr. Bürgermeister' };
    const wrapper = shallow(<PetitionTags winner response={response} />);
    const hasText = wrapper.text().indexOf('Response') > -1;
    const actual = wrapper.containsMatchingElement(Icon) && hasText;
    const expected = true;

    assert.equal(actual, expected);
  });
});
