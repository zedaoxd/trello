import { useCallback, useReducer } from 'react';


type Action<TIpunt, TOutput> = (data: TIpunt) => Promise<ActionState<TIpunt, TOutput>>


type UseActionOptions<TOutput> = {
  onSuccess?: (data: TOutput) => void;
  onError?: (data: string) => void;
  onComplete?: () => void;
}

type State<TInput, TOutput> = {
  fieldErrors?: FieldErrors<TInput> | undefined;
  error?: string | null;
  data?: TOutput;
  isLoading: boolean;
}

const reducer = <TInput, TOutput>(
  state: State<TInput, TOutput>, 
  newSatate: Partial<State<TInput, TOutput>>,
) => {
  return {
    ...state,
    ...newSatate
  };
};

export const useAction = <TInput, TOutput>(
  action: Action<TInput, TOutput>,
  options: UseActionOptions<TOutput> = {}
) => {
  const [state, setState] = useReducer(reducer<TInput, TOutput>, {
    isLoading: false
  });

  const execute = useCallback(
    async (input: TInput) => {
      setState({ isLoading: true });

      try {
        const result = await action(input);

        if (!result)
          return;

        setState(result);

        if (result.error) {
          options.onError?.(result.error);
        }

        if (result.data) {
          options.onSuccess?.(result.data);
        }

      } finally {
        setState({ isLoading: false });
        options.onComplete?.();
      }
    
    }, [action, options]);

  return {
    ...state,
    execute
  };
};
