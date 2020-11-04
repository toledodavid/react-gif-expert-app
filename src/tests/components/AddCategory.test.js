import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('Tests for <AddCategory /> component', () => {

  const setCategories = () => {};
  const wrapper = shallow(<AddCategory setCategories={setCategories} />);

  test('It should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('It should change input value', () => {
    const input = wrapper.find('input');
    const value = 'Mario Bros';
    input.simulate('change', {target: {value}});

    expect(wrapper.find('p').text().trim()).toBe(value);
  });

});