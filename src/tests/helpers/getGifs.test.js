import '@testing-library/jest-dom';
import { getGifs } from '../../helpers/getGifs';

describe('Tests in getGifs fetch helper', () => {

  test('It should return 10 elements', async() => {
    const gifs = await getGifs('Avatar');
    expect(gifs.length).toBe(10);
  });

  test('It should return empty array [] if argument is not passed', async() => {
    const gifs = await getGifs('');
    expect(gifs.length).toBe(0);
  });

});