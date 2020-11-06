import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Tests in useFetchGifs hook', () => {

  test('It should return initial state', () => {

    const { result } = renderHook(() => useFetchGifs('Batman'));

    const { data, loading } = result.current;

    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

});