// __tests__/fetcher.test.js
import { getPaginatedData, parseData } from '../index.js';

describe('parseData', () => {
  it('returns the array unchanged if input is an array', () => {
    const input = [1, 2, 3];
    expect(parseData(input)).toEqual(input);
  });

  it('returns empty array if input is null or undefined', () => {
    expect(parseData(null)).toEqual([]);
    expect(parseData(undefined)).toEqual([]);
  });

  it('extracts the array of items correctly from nested data', () => {
    const input = {
      incomplete_results: false,
      total_count: 1,
      items: [{ id: 123 }],
    };
    expect(parseData(input)).toEqual([{ id: 123 }]);
  });
});
