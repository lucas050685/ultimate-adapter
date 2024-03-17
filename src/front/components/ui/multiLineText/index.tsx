export type MultiLineTextProps = {
  value?: string;
}

export function MultiLineText({ value }: MultiLineTextProps) {
  if (!value) return null;

  const containerClassName = "px-3 py-2 overflow-y-scroll w-full";

  const getLines = () => {
    const lineClassNames = "whitespace-pre";
    const lines = value.split('\n');
    return lines.map((line, index) => {
      return <div className={lineClassNames} key={`${line}-${index}`}>{line}</div>
    })
  }

  return (
    <div className={containerClassName}>
      {getLines()}
    </div>
  )
}