import { renderHook } from '@testing-library/react';

import useShuffle from './use-shuffle';

const MOCK_array = ['a', 'b', 'c', 'd', 'e', 'f', 'e'];

describe('Test Hook useShuffle', () => {
  it('shuffles correctly', () => {
    const { result } = renderHook(() => useShuffle(MOCK_array));
    expect(result.current).not.toStrictEqual(MOCK_array);
  });
});
