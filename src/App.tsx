import { Button } from "./front/components/ui/button";

export default function App() {
  return (
    <>
      <Button variant="default">This is a default button</Button>
      <Button variant="secondary">This is a secondary button</Button>
      <Button variant="destructive">This is a destructive button</Button>
      <Button variant="ghost">This is a ghost button</Button>
      <Button variant="link">This is a link button</Button>
      <Button variant="outline">This is a outline button</Button>
      <Button size="icon">X</Button>
    </>
  )
}