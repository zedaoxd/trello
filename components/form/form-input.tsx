'use client';

import { Input, Label } from '@/components/ui';
import { Show } from '@/lib/show';
import { cn } from '@/lib/utils';
import { forwardRef } from 'react';
import { useFormStatus } from 'react-dom';
import { FormErrors } from '.';

type Props = {
  id: string;
  label?: string;
  errors?: Record<string, string[] | undefined>;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const FormInput = forwardRef<HTMLInputElement, Props>(({
  id,
  errors,
  label,
  disabled,
  className,
  required,
  ...rest
}, ref) => {
  const { pending } = useFormStatus();

  return (
    <div className='space-y-2'>
      <div className='space-y-1'>
        <Show when={label !== undefined}>
          <Label
            htmlFor={id}
            className='text-xs font-semibold text-neutral-700'
          >
            {label} {required && <span className='text-rose-500'>*</span>}
          </Label>
        </Show>

        <Input
          {...rest}
          id={id}
          name={id}
          ref={ref}
          required={required}
          disabled={pending || disabled}
          className={cn(
            'text-sm px-2 py-1 h-7',
            className,
          )}
          aria-describedby={`${id}-error`}
        />
      </div>

      <FormErrors
        id={id}
        errors={errors}
      />
    </div>
  );
});

FormInput.displayName = 'FormInput';
