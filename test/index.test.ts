import { renderHook } from '@testing-library/react-hooks'
import { usePromiseState } from '../src';

describe('usePromiseState', () => {
  it('calls correct promise', () => {
    const { result, waitFor } = renderHook(() => usePromiseState<string>({
      promise: () => Promise.resolve('hello world.')
    }))
    waitFor(() => expect(result.current.data).toBe('hello world.'))
  });
});
