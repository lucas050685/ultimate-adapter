import { ChangeEvent, TextareaHTMLAttributes, useState } from "react";
import { Textarea } from "../textarea";

export type JsonInputProps = {} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export function JsonInput({ className, onChange, ...props }: JsonInputProps) {
  const [error, setError] = useState<string | undefined>(undefined);

  const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.currentTarget.value;
    try {
      JSON.parse(value);
      setError(undefined);
    } catch (e: any) {
      setError(e.toString());
    }
    if (onChange) onChange(event);
  }

  const containerClassName = 'flex flex-col relative w-full';
  const errorClassName = 'italic text-amber-600 mt-2';
  const textAreaClassName = 'grow resize-none';

  return (
    <div className={containerClassName}>
      <Textarea className={textAreaClassName} onChange={onChangeHandler} {...props} />
      {error && <div className={errorClassName}>{error}</div>}
    </div>)
}