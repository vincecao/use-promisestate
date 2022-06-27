import { renderHook } from '@testing-library/react-hooks';

import useShuttle from './use-shuttle';

const MOCK_array = ['a', 'b', 'c', 'd', 'e', 'f', 'e'];

describe('Test Hook useShuttle', () => {
  it('shuttles correctly', () => {
    const { result } = renderHook(() => useShuttle(MOCK_array));
    expect(result.current).not.toStrictEqual(MOCK_array);
  });
});
