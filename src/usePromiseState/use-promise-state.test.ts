import { act, renderHook } from '@testing-library/react-hooks';

import usePromiseState, {
  UsePromiseStateOptions,
  UsePromiseStatePromise,
} from '.';

type Props = {
  promiseFn: UsePromiseStatePromise<string>;
  options?: UsePromiseStateOptions<string>;
};

const MOCK_promise = jest.fn();

describe('Test Hook usePromiseState', () => {
  beforeEach(() => {
    MOCK_promise.mockResolvedValue('Hello world.');
  });
  afterEach(() => {
    jest.resetAllMocks();
  });
  it('calls the correct promise function passing with undefined options', async () => {
    const { result, waitFor } = renderHook(
      ({ promiseFn, options }: Props) =>
        usePromiseState<string>(promiseFn, options),
      {
        initialProps: {
          promiseFn: MOCK_promise,
        },
      }
    );

    await waitFor(() => {
      const [data] = result.current;
      expect(data).toBe('Hello world.');
    });
  });

  it('does not call promise function when having some invalid deps inside options', async () => {
    const { result, waitFor } = renderHook(
      ({ promiseFn, options }: Props) =>
        usePromiseState<string>(promiseFn, options),
      {
        initialProps: {
          promiseFn: MOCK_promise,
          options: {
            deps: [undefined, true],
          },
        },
      }
    );

    const [data] = result.current;
    expect(data).toBe(null);

    await waitFor(() => {
      const [data] = result.current;
      expect(data).not.toBe('Hello world.');
    });
  });

  it('does call promise function when the invalid deps becomes valid inside options', async () => {
    const { result, waitFor, rerender } = renderHook(
      ({ promiseFn, options }: Props) =>
        usePromiseState<string>(promiseFn, options),
      {
        initialProps: {
          promiseFn: MOCK_promise,
          options: {
            deps: [undefined, true],
          },
        },
      }
    );

    const [data] = result.current;
    expect(data).toBe(null);

    rerender({
      promiseFn: MOCK_promise,
      options: {
        deps: [true, true],
      },
    });

    await waitFor(() => {
      const [data] = result.current;
      expect(data).not.toBe('Hello world.');
    });
  });

  it('does call promise function again when the valid deps updates', async () => {
    MOCK_promise.mockImplementation(
      (name: string) => 'Hello world, ' + name + '!'
    );

    const { result, waitFor, rerender } = renderHook(
      ({ promiseFn, options }: Props) =>
        usePromiseState<string>(promiseFn, options),
      {
        initialProps: {
          promiseFn: () => MOCK_promise('Jerry'),
        },
      }
    );

    await waitFor(() => {
      const [data] = result.current;
      expect(data).toBe('Hello world, Jerry!');
    });

    rerender({
      promiseFn: () => MOCK_promise('Tom'),
    });

    await waitFor(() => {
      const [data] = result.current;
      expect(data).toBe('Hello world, Tom!');
    });
  });

  it('does not call promise function when it is returning undefined', async () => {
    const { result, waitFor } = renderHook(
      ({ promiseFn, options }: Props) =>
        usePromiseState<string>(promiseFn, options),
      {
        initialProps: {
          promiseFn: () => undefined,
        },
      }
    );

    await waitFor(() => {
      const [data] = result.current;
      expect(data).toBe(null);
    });
    expect(MOCK_promise).toBeCalledTimes(0);
  });

  it('does call promise function when it returns valid promise from undefined', async () => {
    const { result, waitFor, rerender } = renderHook(
      ({ promiseFn, options }: Props) =>
        usePromiseState<string>(promiseFn, options),
      {
        initialProps: {
          promiseFn: () => undefined,
        },
      }
    );

    let data = result.current[0];
    expect(data).toBe(null);

    rerender({
      promiseFn: MOCK_promise,
    });

    await waitFor(() => {
      data = result.current[0];
      expect(data).toBe('Hello world.');
    });
    expect(MOCK_promise).toBeCalledTimes(1);
  });

  it('does call onPending function when state changes to pending status', async () => {
    const MOCK_onPending = jest.fn();
    const { result, waitFor } = renderHook(
      ({ promiseFn, options }: Props) =>
        usePromiseState<string>(promiseFn, options),
      {
        initialProps: {
          promiseFn: MOCK_promise,
          options: {
            onPending: MOCK_onPending,
          },
        },
      }
    );

    await waitFor(() => {
      const data = result.current[0];
      expect(data).toBe('Hello world.');
    });
    expect(MOCK_onPending).toBeCalledTimes(1);
    expect(MOCK_promise).toBeCalledTimes(1);
  });

  it('does call onSuccess when the promise function gets resolved', async () => {
    const MOCK_onSuccess = jest.fn();
    const { result, waitFor } = renderHook(
      ({ promiseFn, options }: Props) =>
        usePromiseState<string>(promiseFn, options),
      {
        initialProps: {
          promiseFn: MOCK_promise,
          options: {
            onSuccess: MOCK_onSuccess,
          },
        },
      }
    );

    await waitFor(() => {
      const data = result.current[0];
      expect(data).toBe('Hello world.');
    });
    expect(MOCK_onSuccess).toBeCalledTimes(1);
    expect(MOCK_onSuccess).toBeCalledWith('Hello world.');
    expect(MOCK_promise).toBeCalledTimes(1);
  });

  it('does call onError when the promise function gets rejected', async () => {
    MOCK_promise.mockRejectedValue(new Error('new error'));
    const MOCK_onError = jest.fn();
    const { waitFor } = renderHook(
      ({ promiseFn, options }: Props) =>
        usePromiseState<string>(promiseFn, options),
      {
        initialProps: {
          promiseFn: MOCK_promise,
          options: {
            onError: MOCK_onError,
          },
        },
      }
    );

    await waitFor(() => {
      expect(MOCK_onError).toBeCalledTimes(1);
    });
    expect(MOCK_onError).toBeCalledWith(new Error('new error'));
    expect(MOCK_promise).toBeCalledTimes(1);
  });

  it('does call onFinal when the promise function gets resolved', async () => {
    const MOCK_onFinal = jest.fn();
    const { result, waitFor } = renderHook(
      ({ promiseFn, options }: Props) =>
        usePromiseState<string>(promiseFn, options),
      {
        initialProps: {
          promiseFn: MOCK_promise,
          options: {
            onFinal: MOCK_onFinal,
          },
        },
      }
    );

    await waitFor(() => {
      const data = result.current[0];
      expect(data).toBe('Hello world.');
    });
    expect(MOCK_onFinal).toBeCalledTimes(1);
    expect(MOCK_promise).toBeCalledTimes(1);
  });

  it('does call onFinal when the promise function gets rejected', async () => {
    MOCK_promise.mockRejectedValue(new Error('new error'));
    const MOCK_onFinal = jest.fn();
    const { result, waitFor } = renderHook(
      ({ promiseFn, options }: Props) =>
        usePromiseState<string>(promiseFn, options),
      {
        initialProps: {
          promiseFn: MOCK_promise,
          options: {
            onFinal: MOCK_onFinal,
          },
        },
      }
    );

    await waitFor(() => {
      const { error } = result.current[1];
      expect(error).toStrictEqual(new Error('new error'));
    });

    expect(MOCK_onFinal).toBeCalledTimes(1);
    expect(MOCK_promise).toBeCalledTimes(1);
  });

  it('re-fetches correctly', async () => {
    const { result, waitFor } = renderHook(
      ({ promiseFn, options }: Props) =>
        usePromiseState<string>(promiseFn, options),
      {
        initialProps: {
          promiseFn: MOCK_promise,
        },
      }
    );

    await waitFor(() => {
      const [data] = result.current;
      expect(data).toBe('Hello world.');
    });
    expect(MOCK_promise).toBeCalledTimes(1);

    const { refetch } = result.current[1];
    await act(refetch);

    expect(MOCK_promise).toBeCalledTimes(2);
  });

  it('returns error correctly', async () => {
    MOCK_promise.mockRejectedValue(new Error('new error'));
    const { result, waitFor } = renderHook(
      ({ promiseFn, options }: Props) =>
        usePromiseState<string>(promiseFn, options),
      {
        initialProps: {
          promiseFn: MOCK_promise,
        },
      }
    );

    await waitFor(() => {
      const { error } = result.current[1];
      expect(error).toStrictEqual(new Error('new error'));
    });

    expect(MOCK_promise).toBeCalledTimes(1);
  });
});
