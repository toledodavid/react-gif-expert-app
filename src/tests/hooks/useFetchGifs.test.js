import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Tests in useFetchGifs hook', () => {

  test('It should return initial state', async() => {

    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Batman'));

    const { data, loading } = result.current;

    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test('It should return images array and loading in false', async() => {

    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Batman'));
    await waitForNextUpdate();

    const { data, loading } = result.current;

    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  });

});