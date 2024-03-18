import { FormEvent, PropsWithChildren, useState } from "react"
import { parseForm } from "./parseForm";

export type FormProps = {
  onSubmit?: (data: Record<string, any>, form: HTMLFormElement) => Promise<void> | void;
} & PropsWithChildren;

export function Form({ children, onSubmit }: FormProps) {
  const [submiting, setSubmiting] = useState(false);

  const onSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    const data = parseForm(form);
    if (onSubmit) {
      setSubmiting(true);
      try {
        await onSubmit(data, form);
      }
      catch (e) {
        console.error('Form submit error', e);
      }
      setSubmiting(false);
    }
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <fieldset disabled={submiting}>
        {children}
      </fieldset>
    </form>
  )
}