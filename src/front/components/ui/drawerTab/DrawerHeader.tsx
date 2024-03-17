import { HTMLAttributes, PropsWithChildren } from "react";
import { ArrowLeft } from 'lucide-react';
import { cn } from "~/front/utils/components";
import { useDrawer } from "./useDrawer";


export type DrawerHeaderProps = PropsWithChildren & HTMLAttributes<HTMLDivElement>;

export function DrawerHeader({ children, className }: DrawerHeaderProps) {
  const { close } = useDrawer();
  const defaultCalssName = 'flex gap-4 text-3xl bold mb-10 items-center';
  const arrowClassName = "cursor-pointer text-primary/80 hover:text-primary"

  return (
    <h1 className={cn(defaultCalssName, className)}>
      <ArrowLeft onClick={close} className={arrowClassName} size={32} />
      {children}
    </h1>
  )
}