import { Button, useDrawer } from "~/front/components/ui";

export function Nuke(){
  const { close, push, id } = useDrawer();

  return (
    <div>
      ID: { id }<br/>
      <Button onClick={close}>Close this drawer</Button>
      <Button onClick={() => push(<Nuke/>)}>Open new Drawer</Button>
    </div>
  );
}