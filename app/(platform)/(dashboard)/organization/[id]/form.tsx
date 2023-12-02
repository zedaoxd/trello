"use client";

import { State, createBoard } from "@/actions";
import { useFormState } from "react-dom";
import { FormButton } from "./form-button";
import { FormInput } from "./input";

export const Form = () => {
  const initialState: State = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createBoard, initialState);

  return (
    <form action={dispatch}>
      <div className="flex flex-col space-y-2">
        <FormInput errors={state?.errors} />
      </div>

      <FormButton />
    </form>
  );
};
