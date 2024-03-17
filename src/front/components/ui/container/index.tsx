import { HTMLProps, PropsWithChildren } from "react"
import { cn } from "~/front/utils/components";

export type ContainerProps = {
  containerClassName?: string;
  variant?: "primary" | "sublevel";
} & PropsWithChildren & HTMLProps<HTMLDivElement>;

export function Container({ children, className, containerClassName, variant = "primary" }: ContainerProps) {
  const defaultContainerClassName = 'w-full py-4';

  const variants = {
    primary: "m-auto max-w-[1024px]",
    sublevel: "m-auto max-w-[1024px] pl-10",
  };

  const contentClassName = variants[variant];

  return (
    <div className={cn(defaultContainerClassName, containerClassName)}>
      <div className={cn(contentClassName, className)}>
        {children}
      </div>
    </div>
  )
}

export default Container;
