type FieldErrors<T> = {
  [K in keyof T]?: string;
};

type ActionState<TInput, TOutput> = {
  fieldErrors?: FieldErrors<TInput>;
  error?: string | null;
  data?: TOutput;
};
