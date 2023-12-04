import { Separator } from '@/components/ui';
import { BoardList, Info } from './_components';

export default async function OrganizationPage() {

  return (
    <div className="w-full mb-20">
      <Info isPro={false} />

      <Separator className="my-4" />

      <div className="px-2 md:px-4">
        <BoardList />
      </div>
    </div>
  );
}
