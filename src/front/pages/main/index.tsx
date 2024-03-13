import { Button, useDrawer } from "~/front/components/ui";
import { Nuke } from "~/front/components/nuke";

export function MainPage(){
  const { push } = useDrawer();

  return (
    <div>
      <Button onClick={()=> push(<Nuke />)}>Open Drawer</Button>
    </div>
  );
}