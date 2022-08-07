import { renderHook, waitFor } from '@testing-library/react';
import { $fetch } from 'ohmyfetch';

import useFetch, { UseFetchOptions } from '.';

type Props = {
  url: string | undefined | null | false;
  options?: UseFetchOptions;
};

jest.mock('ohmyfetch', () => ({
  $fetch: jest.fn(),
}));

const MOCK_URL = '/test-api';

describe('Test Hook usePromiseState', () => {
  beforeEach(() => {
    ($fetch as any).mockResolvedValue('Hello world.');
  });
  afterEach(() => {
    jest.resetAllMocks();
  });
  it('calls the correct url passing with undefined options', async () => {
    const { result } = renderHook(
      ({ url, options }: Props) => useFetch<string>(url, options),
      {
        initialProps: {
          url: MOCK_URL,
        },
      }
    );

    await waitFor(() => {
      const { data, error } = result.current;
      expect(error).toBe(false);
      expect(data).toBe('Hello world.');
      expect($fetch).toBeCalledWith(MOCK_URL, undefined);
    });
  });

  it('calls the correct url passing with given options', async () => {
    const { result } = renderHook(
      ({ url, options }: Props) => useFetch<string>(url, options),
      {
        initialProps: {
          url: MOCK_URL,
          options: {
            baseURL: '/MOCK_BASE',
          },
        },
      }
    );

    await waitFor(() => {
      const { data, error } = result.current;
      expect(error).toBe(false);
      expect(data).toBe('Hello world.');
      expect($fetch).toBeCalledWith(MOCK_URL, {
        baseURL: '/MOCK_BASE',
      });
    });
  });
});
