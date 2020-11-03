import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('Tests for <GifGridItem/> component', () => {
  let wrapper = shallow(<GifGridItem />);

  beforeEach(() => {
    wrapper = shallow( <GifGridItem />);
  });

  test('It should render <GifGridItem/> correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});