import { DependencyList, useCallback, useEffect, useState } from 'react';

export type UsePromiseStateValue<T> = {
  promise: () => Promise<T>;
  onSuccess?: (result: T) => void;
  onError?: (error: Error) => void;
  onFinal?: () => void;
  deps?: DependencyList;
  disableInitialFetch?: boolean;
};

type UsePromiseStatus = 'waiting' | 'pending' | 'resolved' | 'rejected';

export type UsePromiseState<T> = {
  data: T | null;
  status: UsePromiseStatus;
  refetch: () => void;
  update: (data: T | null) => void;
};

export default function usePromiseState<T>({
  promise,
  onSuccess,
  onError,
  onFinal,
  deps = [],
  disableInitialFetch,
}: UsePromiseStateValue<T>): UsePromiseState<T> {
  const [fetchTrigger, setFetchTrigger] = useState<boolean>(!disableInitialFetch);
  const [data, setData] = useState<T | null>(null);
  const [status, setStatus] = useState<UsePromiseStatus>('waiting');

  useEffect(() => {
    if (fetchTrigger && deps.every((d) => !!d)) {
      (async () => {
        try {
          setStatus('pending');
          const result = await promise();
          setStatus('resolved');
          setData(result);
          if (onSuccess) onSuccess(result);
        } catch (e) {
          setStatus('rejected');
          if (onError) onError(e as Error);
        } finally {
          setFetchTrigger(false);
          if (onFinal) onFinal();
        }
      })();
    }
  }, [promise, fetchTrigger, ...deps]);

  const memorizedRefetch = useCallback(() => {
    setFetchTrigger(true);
  }, []);

  const memorizedUpdateData = useCallback((newData: T | null) => {
    setData(newData);
  }, []);

  return { data, status, refetch: memorizedRefetch, update: memorizedUpdateData };
}
