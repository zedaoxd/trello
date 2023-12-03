'use client';


import { createBoard } from '@/actions';
import { FormInput, FormSubmit } from '@/components/form';
import { useAction } from '@/hooks';

export const Form = () => {
  const { execute, fieldErrors } = useAction(createBoard);

  const onSubmit = (formData: FormData) => {
    const title = formData.get('title') as string;

    execute({ title });
  };

  return (
    <form action={onSubmit} className="flex flex-col space-y-2">
      <FormInput
        id='title'
        label='Board Title'
        errors={fieldErrors}
      />

      <FormSubmit>
        Create Board
      </FormSubmit>
    </form>
  );
};
