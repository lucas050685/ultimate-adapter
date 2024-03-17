import {
  ButtonGroup,
  Button,
  Container,
  Form,
  InputContainer,
  Input,
  Label,
  useDrawer
} from "~/front/components/ui";
import { DrawerHeader } from "../ui/drawerTab/DrawerHeader";

export function TransformerForm() {
  const { close } = useDrawer();

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data, null, 2));
  }

  return (
    <Container>
      <DrawerHeader><h1>Create a new Transformer</h1></DrawerHeader>
      <Container variant="sublevel">
        <Form onSubmit={onSubmit}>
          <InputContainer>
            <Label htmlFor="title">Title</Label>
            <Input id="title" name="title" />
          </InputContainer>

          <InputContainer>
            <Label htmlFor="description">Description</Label>
            <Input id="description" name="description" />
          </InputContainer>
          <ButtonGroup>
            <Button variant="destructive" onClick={close}>Cancel</Button>
            <Button type="submit" variant="action">Save</Button>
          </ButtonGroup>
        </Form>
      </Container>
    </Container>
  )
}