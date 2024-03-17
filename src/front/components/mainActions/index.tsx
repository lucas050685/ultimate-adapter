import { Plus } from 'lucide-react';
import { ButtonGroup, Button, useDrawer } from "~/front/components/ui";
import { TransformerForm } from '../transformerForm';

export function MainActions() {
  const { push } = useDrawer();

  return (<ButtonGroup>
    <Button variant="action" onClick={() => push(<TransformerForm />)}><Plus />Create Transformer</Button>
  </ButtonGroup>)
}