'use server';

import { createSafeActions } from '@/lib/create-safe-actions';
import db from '@/lib/db';
import { auth } from '@clerk/nextjs';
import { revalidatePath } from 'next/cache';
import { CreateBoard } from './schema';
import { InputType, ReturnType } from './type';


const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId } = auth();

  if (!userId)
    return {
      error: 'You must be logged in to create a board'
    };

  const board = await db.board.create({ data });

  if (board instanceof Error)
    return {
      error: board.message
    };

  revalidatePath(`/board/${board.id}`);

  return { data: board };
};

export const createBoard = createSafeActions(CreateBoard, handler);
