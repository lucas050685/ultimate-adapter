import { Container, CardColContainer } from "~/front/components/ui";
import { TransformerCard, MainActions } from "~/front/components";
import { transformers } from "~/front/mocks";

export function MainPage() {
  return (
    <>
      <Container>
        <MainActions />
      </Container>
      <Container>
        <CardColContainer>
          {transformers.map((transformer) => {
            return <TransformerCard transformer={transformer} />;
          })}
        </CardColContainer>
      </Container>
    </>
  );
}