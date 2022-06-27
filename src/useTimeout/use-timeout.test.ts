import { renderHook } from '@testing-library/react-hooks';

import useTimeout from './use-timeout';

const MOCK_promise = jest.fn();

describe('Test Hook useTimeout', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout');
  });
  afterEach(() => {
    jest.resetAllMocks();
    jest.useRealTimers();
  });
  it('calls in timeout correctly', async () => {
    renderHook(() => useTimeout(MOCK_promise, 2000));
    expect(MOCK_promise).not.toBeCalled();
    jest.runAllTimers();
    expect(MOCK_promise).toBeCalled();
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(MOCK_promise, 2000);
  });

  it('does not call with timeout when disabled true', async () => {
    renderHook(() => useTimeout(MOCK_promise, 2000, true));
    expect(MOCK_promise).not.toBeCalled();
    jest.runAllTimers();
    expect(MOCK_promise).not.toBeCalled();
    expect(setTimeout).not.toHaveBeenCalled();
  });
});
