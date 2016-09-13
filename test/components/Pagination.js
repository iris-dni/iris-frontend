import React from 'react';
import { Link } from 'react-router';
import { shallow } from 'enzyme';
import { assert } from 'chai';
import Pagination from 'components/Pagination';
import styles from 'components/Pagination/pagination.scss';

describe('<Pagination />', () => {
  it('does not render without > 1 pages', () => {
    const wrapper = shallow(<Pagination totalPages={1} />);
    const actual = wrapper.hasClass(`${styles.root}`);
    const expected = false;

    assert.equal(actual, expected);
  });

  it('does render when > 1 pages', () => {
    const wrapper = shallow(<Pagination totalPages={4} />);
    const actual = wrapper.find(`.${styles.root}`).length;
    const expected = 1;

    assert.equal(actual, expected);
  });

  it('does not render "previous" link when on first page', () => {
    const wrapper = shallow(<Pagination totalPages={4} isFirstPage isLastPage={false} />);
    const actual = wrapper.find(Link).length;
    const expected = 1;

    assert.equal(actual, expected);
  });

  it('does not render "next" link when on last page', () => {
    const wrapper = shallow(<Pagination totalPages={4} isFirstPage={false} isLastPage />);
    const actual = wrapper.find(Link).props().rel;
    const expected = 'prev';

    assert.equal(actual, expected);
  });

  it('does not render "prev" link when on first page', () => {
    const wrapper = shallow(<Pagination totalPages={4} isFirstPage isLastPage={false} />);
    const actual = wrapper.find(Link).props().rel;
    const expected = 'next';

    assert.equal(actual, expected);
  });

  it('renders both "previous" and "next" links if not first or last page', () => {
    const wrapper = shallow(<Pagination totalPages={4} isLastPage={false} isFirstPage={false} />);
    const actual = wrapper.find(Link).length;
    const expected = 2;

    assert.equal(actual, expected);
  });
});
