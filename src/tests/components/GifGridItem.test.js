import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('Tests for <GifGridItem/> component', () => {

  const title = 'Test title';
  const imgUrl = 'https://www.google.com';

  const wrapper = shallow(<GifGridItem title={title} imgUrl={imgUrl} />);

  test('It should render <GifGridItem/> correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('It should have a paragraph with the title', () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(title);
  });

  test('It should have a src with value of imgUrl and an alt with value of title', () => {
    const img = wrapper.find('img');
    expect(img.prop('src')).toBe(imgUrl);
    expect(img.prop('alt')).toBe(title);
  });

  test('It should have css class animate__fadeIn', () => {
    const div = wrapper.find('div');
    const className = div.prop('className');
    expect(className.includes('animate__fadeIn')).toBe(true); 
  });
});