import React from 'react';
import { Link } from 'react-router';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Pagination from 'components/Pagination';
import styles from 'components/Pagination/pagination.scss';

describe('<Pagination />', () => {
  it('does not render without > 1 pages', () => {
    const wrapper = shallow(<Pagination totalPages={1} />);
    expect(wrapper.hasClass(`${styles.root}`)).to.equal(false);
  });

  it('does render when > 1 pages', () => {
    const wrapper = shallow(<Pagination totalPages={4} />);
    expect(wrapper.find(`.${styles.root}`)).to.not.be.empty;
  });

  it('does not render "previous" link when on first page', () => {
    const wrapper = shallow(<Pagination totalPages={4} isFirstPage isLastPage={false} />);
    expect(wrapper.find(Link)).to.have.length(1);
  });

  it('does not render "next" link when on last page', () => {
    const wrapper = shallow(<Pagination totalPages={4} isFirstPage={false} isLastPage />);
    expect(wrapper.find(Link)).to.have.length(1);
    expect(wrapper.find(Link).props().rel).to.equal('prev');
  });

  it('does not render "prev" link when on first page', () => {
    const wrapper = shallow(<Pagination totalPages={4} isFirstPage isLastPage={false} />);
    expect(wrapper.find(Link)).to.have.length(1);
    expect(wrapper.find(Link).props().rel).to.equal('next');
  });

  it('renders both "previous" and "next" links if not first or last page', () => {
    const wrapper = shallow(<Pagination totalPages={4} isLastPage={false} isFirstPage={false} />);
    expect(wrapper.find(Link)).to.have.length(2);
  });
});
