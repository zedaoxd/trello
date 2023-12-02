type Props = {
  children: React.ReactNode;
  when: boolean;
};

export const Show = ({ when, children }: Props) => {
  return when ? <>{children}</> : null;
};
