"use client";

import { Button } from "@/components/ui";
import { useFormStatus } from "react-dom";

export const FormDelete = () => {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} type="submit" variant="destructive" size="sm">
      Delete
    </Button>
  );
};
