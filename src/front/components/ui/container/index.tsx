import { HTMLProps, PropsWithChildren } from "react"
import { cn } from "~/front/utils/components";

export type ContainerProps = {
  containerClassName?: string;
} & PropsWithChildren & HTMLProps<HTMLDivElement>;

export function Container({ children, className, containerClassName }: ContainerProps){
  const defaultContainerClassName = 'w-full';
  const contentClassName = 'm-auto max-w-[1024px]';

  return (
    <div className={cn(defaultContainerClassName, containerClassName)}>
      <div className={cn(contentClassName, className)}>
        { children }
      </div>
    </div>
  )
}

export default Container;
