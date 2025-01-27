'use client';

import { HTMLAttributes, useState } from 'react';

import { Search } from 'lucide-react';

import { cn } from '@documenso/ui/lib/utils';
import { Button } from '@documenso/ui/primitives/button';

import { CommandMenu } from '../common/command-menu';

export type DesktopNavProps = HTMLAttributes<HTMLDivElement>;

export const DesktopNav = ({ className, ...props }: DesktopNavProps) => {
  // const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn('ml-8 hidden flex-1 gap-x-6 md:flex md:justify-center', className)}
      {...props}
    >
      <CommandMenu open={open} onOpenChange={setOpen} />

      <Button
        variant="outline"
        className="text-muted-foreground flex w-96 items-center justify-between rounded-lg"
        onClick={() => setOpen((open) => !open)}
      >
        <div className="flex items-center">
          <Search className="mr-2 h-5 w-5" />
          Search
        </div>

        <div>
          <div className="text-muted-foreground bg-muted rounded-md px-1.5 py-0.5 font-mono text-xs">
            Ctrl+K
          </div>
        </div>
      </Button>

      {/* We have no other subpaths rn */}
      {/* <Link
        href="/documents"
        className={cn(
          'text-muted-foreground focus-visible:ring-ring ring-offset-background rounded-md font-medium leading-5 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2',
          {
            'text-foreground': pathname?.startsWith('/documents'),
          },
        )}
      >
        Documents
      </Link> */}
    </div>
  );
};
