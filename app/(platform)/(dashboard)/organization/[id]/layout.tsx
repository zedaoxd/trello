import { OrgControl } from './_components';

export default function OrganizationIdLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <OrgControl />
      {children}
    </>
  );
}
