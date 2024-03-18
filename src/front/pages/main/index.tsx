import { Container, CardColContainer } from "~/front/components/ui";
import { TransformerCard, MainActions } from "~/front/components";
import { useTransformers } from "~/front/hooks/useTransformers";

export function MainPage() {
  const { transformers } = useTransformers();

  return (
    <>
      <Container>
        <MainActions />
      </Container>
      <Container>
        <CardColContainer>
          {transformers.map((transformer, index) => {
            return <TransformerCard key={`${transformer.id}-${index}`} transformer={transformer} />;
          })}
        </CardColContainer>
      </Container>
    </>
  );
}