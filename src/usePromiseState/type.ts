export type UsePromiseStatus = 'waiting' | 'pending' | 'resolved' | 'rejected';

export type UsePromiseState<T> = [
  T | null,
  {
    error: Error | null;
    status: UsePromiseStatus;
    refetch: () => void;
  },
  (data: T | null) => void | React.Dispatch<React.SetStateAction<T | null>>
];

export type UsePromiseStatePromise<T> = () => Promise<T> | undefined | false;

export type UsePromiseStateOptions<T> = {
  onSuccess?: (result: T) => void;
  onError?: (error: Error) => void;
  onPending?: () => void;
  onFinal?: () => void;
  deps?: React.DependencyList;
  debounceDelay?: number;
};
