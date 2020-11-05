import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');


describe('Tests for <GifGrid /> component', () => {

  const category = 'Superman';

  test('It should render correctly', () => {

    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    });

    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('It should show items when images have been loaded from useFetchGifs', () => {
    const gifs = [
      {
        id: '121',
        title: 'TestTitle',
        imgUrl: 'http://test.com/example'
      }
    ];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    });

    const wrapper = shallow(<GifGrid category={category} />);
    
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').exists()).toBe(true);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
  });

});