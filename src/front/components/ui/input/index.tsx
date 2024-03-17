import * as React from "react"

import { cn } from "~/front/utils/components"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export type InputContainerProps = {} & React.PropsWithChildren & React.HTMLAttributes<HTMLFieldSetElement>;

function InputContainer({ children, className, ...props }: InputContainerProps) {
  const defaultCalssName = 'flex flex-col gap-1 mb-4';

  return (
    <fieldset className={cn(defaultCalssName, className)} {...props}>
      {children}
    </fieldset>
  )
}

export { Input, InputContainer }
