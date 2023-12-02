"use server";

import db from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

export type State = {
  errors?: {
    title?: string[];
  };
  message?: string | null;
}

const schema = z.object({
  title: z.string().min(3, {
    message: "Must be at least 3 characters long",
  }),
});

export async function createBoard(prevState: State, formData: FormData) {
  const validatedFields = schema.safeParse({
    title: formData.get("title"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing or invalid fields",
    };
  }

  const { title } = validatedFields.data;

  try {
    await db.board.create({
      data: { title },
    });
  } catch (error) {
    return {
      message: "Database Error",
    };
  }

  revalidatePath("/organization/org_2YjzXkupAePDGuqmmuiBgWvaaZC");
  redirect("/organization/org_2YjzXkupAePDGuqmmuiBgWvaaZC");
}