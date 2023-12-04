import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui';

type Props = {
  children: React.ReactNode;
  description: string;
  side?: Parameters<typeof TooltipContent>[0]['side'];
  sideOffset?: Parameters<typeof TooltipContent>[0]['sideOffset'];
};

export const Hint = ({
  children, 
  description, 
  side = 'bottom', 
  sideOffset = 0,
}: Props) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger>
          {children}
        </TooltipTrigger>

        <TooltipContent
          side={side}
          sideOffset={sideOffset}
          className='text-xs max-w-[220px] break-words'
        >
          {description}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
