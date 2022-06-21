import {
  DependencyList,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

export type UsePromiseStateValue<T> = {
  promise: () => Promise<T> | false | undefined;
  onSuccess?: (result: T) => void;
  onError?: (error: Error) => void;
  onFinal?: () => void;
  deps?: DependencyList;
  disableInitialFetch?: boolean;
};

export type UsePromiseStatus = 'waiting' | 'pending' | 'resolved' | 'rejected';

export type UsePromiseState<T> = {
  data: T | null;
  error: Error | null;
  status: UsePromiseStatus;
  refetch: () => void;
  update: (data: T | null) => void;
};

export default function usePromiseState<T>({
  promise,
  onSuccess,
  onError,
  onFinal,
  deps = useMemo(() => [], []),
}: UsePromiseStateValue<T>): UsePromiseState<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [status, setStatus] = useState<UsePromiseStatus>('waiting');

  const memorizedFetchData = useCallback(async () => {
    if (promise && deps.every(d => d != null)) {
      const promiseFn = promise();
      if (!promiseFn) return;
      try {
        setStatus('pending');
        const result = await promiseFn;
        setStatus('resolved');
        setData(result);
        if (onSuccess) onSuccess(result);
      } catch (e) {
        setStatus('rejected');
        setError(e as Error);
        if (onError) onError(e as Error);
      } finally {
        if (onFinal) onFinal();
      }
    }
  }, [promise, deps]);

  useEffect(() => {
    memorizedFetchData();
  }, [memorizedFetchData]);

  const memorizedUpdateData = useCallback((newData: T | null) => {
    setData(newData);
  }, []);

  return {
    data,
    error,
    status,
    refetch: memorizedFetchData,
    update: memorizedUpdateData,
  };
}
