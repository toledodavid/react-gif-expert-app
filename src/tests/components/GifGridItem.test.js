import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('Tests for <GifGridItem/> component', () => {

  const title = 'Test title';
  const imgUrl = 'https://www.google.com';

  test('It should render <GifGridItem/> correctly', () => {
    const wrapper = shallow(<GifGridItem title={title} imgUrl={imgUrl} />);
    expect(wrapper).toMatchSnapshot();
  });
});