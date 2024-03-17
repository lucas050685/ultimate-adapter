import { TypeSchema } from '~/core/class/TypeSchema';
import { JsonInput, JsonInputProps } from "../jsonInput"
import { MultiLineText } from '../multiLineText';
import { ChangeEvent, useState } from 'react';


export type SchemaInputProps = {} & JsonInputProps

export function SchemaInput({ id, name, onChange, ...props }: SchemaInputProps) {
  const [schemaString, setSchemaString] = useState('');

  const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.currentTarget.value;
    try {
      const o = JSON.parse(value);
      const schema = TypeSchema.from(o);
      setSchemaString(schema.toString({ noDeclaration: true }));
    } catch {
      // nothing to do;
    }

    if (onChange) onChange(event);
  }

  const containerClassName = 'flex gap-2 min-h-[80px] max-h-[400px] content-stretch'
  const schemaClassName = 'flex min-h-[80px] w-full rounded-md border border-input bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'

  const sampleId = `${id}Sample`;
  const sampleName = `${name}Sample`;
  const schemaId = `${id}Schema`;
  const schemaName = `${name}Schema`;

  return (
    <div className={containerClassName}>
      <JsonInput id={sampleId} name={sampleName} onChange={onChangeHandler} {...props} />
      <div className={schemaClassName}><MultiLineText value={schemaString} /></div>
      <input type="hidden" value={schemaString} id={schemaId} name={schemaName} />
    </div>
  )
}