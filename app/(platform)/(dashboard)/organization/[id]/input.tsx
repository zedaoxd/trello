"use client";

import { Input } from "@/components/ui";
import { Show } from "@/lib/show";
import { useFormStatus } from "react-dom";

type Props = {
  errors?: Record<string, string[]>;
};

export const FormInput = ({ errors }: Props) => {
  const { pending } = useFormStatus();

  return (
    <div>
      <Input
        id="title"
        name="title"
        type="text"
        placeholder="Enter a board title"
        required
        disabled={pending}
      />

      <Show when={errors !== undefined}>
        <div>
          {errors?.title?.map((error: string) => (
            <p className="text-rose-500" key={error}>
              {error}
            </p>
          ))}
        </div>
      </Show>
    </div>
  );
};
