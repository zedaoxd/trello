'use client';


import { createBoard } from '@/actions';
import {
  Button,
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui';
import { useAction } from '@/hooks';
import { X } from 'lucide-react';
import { toast } from 'sonner';
import { FormSubmit } from './form-button';
import { FormInput } from './form-input';


type Props = {
  children: React.ReactNode;
  side?: Parameters<typeof PopoverContent>[0]['side'];
  align?: Parameters<typeof PopoverContent>[0]['align'];
  sideOffset?: Parameters<typeof PopoverContent>[0]['sideOffset'];
}

export const FormPopover = ({
  side = 'bottom',
  align,
  sideOffset = 0,
  children,
}: Props) => {
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: (data) => toast.success(`Created board: ${data.title}`),
    onError: (error) => toast.error(error),
  });

  const onSubmit = (formData: FormData) => {
    const title = formData.get('title') as string;

    execute({ title });
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        {children}
      </PopoverTrigger>

      <PopoverContent
        align={align}
        className='w-80 pt-3'
        side={side}
        sideOffset={sideOffset}
      >
        <div className='text-sm font-medium text-center text-neutral-600 pb-4'>
          Create board
        </div>

        <PopoverClose asChild>
          <Button
            className='h-auto w-auto p-2 absolute top-2 right-2 text-neutral-600'
            variant='ghost'
          >
            <X className='h-4 w-4' />
          </Button>
        </PopoverClose>

        <form action={onSubmit} className='space-y-4'>
          <div className='space-y-4'>
            <FormInput
              id='title'
              label='Board title'
              type='text'
              errors={fieldErrors}
            />
          </div>

          <FormSubmit className='w-full'>
            Create
          </FormSubmit>
        </form>
      </PopoverContent>
    </Popover>
  );
};
