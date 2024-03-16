import { Button, useDrawer, Container, Card, CardHeader, CardContent, CardTitle, CardDescription, CardFooter } from "~/front/components/ui";
import { Nuke } from "~/front/components/nuke";

export function MainPage(){
  const { push } = useDrawer();

  return (
    <Container>
      <Card>
        <CardHeader>
            <CardTitle>This is my transformer</CardTitle>
            <CardDescription>This is the description of my Transformer</CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={()=> push(<Nuke />)}>Open Drawer</Button>
        </CardContent>
        <CardFooter>
          <p>20% 80%</p>
        </CardFooter>
      </Card>
    </Container>
  );
}