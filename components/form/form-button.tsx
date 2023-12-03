'use client';

import { Button, buttonVariants } from '@/components/ui';
import { cn } from '@/lib/utils';
import { useFormStatus } from 'react-dom';

type Props = {
  children: React.ReactNode;
  variant?: keyof typeof buttonVariants;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const FormSubmit = ({
  children, 
  variant, 
  disabled, 
  className, 
  ...rest 
}: Props) => {
  const { pending } = useFormStatus();

  return (
    <Button
      {...rest}
      disabled={pending || disabled}
      variant={variant}
      type="submit"
      size="sm"
      className={cn(className)}
    >
      {children}
    </Button>
  );
};
