import { deleteBoard } from "@/actions/delete-board";
import { Button } from "@/components/ui";

type Props = {
  id: string;
  title: string;
};

export const Board = ({ id, title }: Props) => {
  const deleteBoardWithId = deleteBoard.bind(null, id);

  return (
    <form action={deleteBoardWithId} className="flex items-center gap-x-2">
      <p>{title}</p>

      <Button type="submit" variant="destructive" size="sm">
        Delete
      </Button>
    </form>
  );
};
