import {
  ButtonGroup,
  Button,
  Container,
  Form,
  InputContainer,
  Input,
  Label,
  useDrawer,
  SchemaInput
} from "~/front/components/ui";
import { DrawerHeader } from "../ui/drawerTab/DrawerHeader";
import { useTransformers } from "~/front/hooks/useTransformers";

export function TransformerForm() {
  const { close } = useDrawer();
  const { save } = useTransformers();

  const onSubmit = async (data: any) => {
    await save(data);
  }

  return (
    <Container>
      <DrawerHeader>Create a new Transformer</DrawerHeader>
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

          <InputContainer>
            <Label htmlFor="sample">Destiny sample</Label>
            <SchemaInput id="detiny" name="detiny" />
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