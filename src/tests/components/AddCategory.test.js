import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('Tests for <AddCategory /> component', () => {

  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test('It should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('It should change input value', () => {
    const input = wrapper.find('input');
    const value = 'Mario Bros';
    input.simulate('change', {target: {value}});

    expect(wrapper.find('p').text().trim()).toBe(value);
  });

  test('It should not post the info with submit', () => {
    wrapper.find('form').simulate('submit', {preventDefault(){}});
    expect(setCategories).not.toHaveBeenCalled();
  });

  test('It should call setCategories method and clear the input value', () => {
    const value = 'Batman';
    const input = wrapper.find('input');
    input.simulate('change', {target: {value}});

    wrapper.find('form').simulate('submit', { preventDefault(){} });

    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

    expect(input.prop('value')).toBe('');
  });

});