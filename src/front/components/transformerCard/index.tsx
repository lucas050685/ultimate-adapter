import { MoreVertical } from "lucide-react"
import {
  Badge,
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
  Button,
} from "~/front/components/ui";
import { Transformer } from "~/core/types";
import { URLCard } from "./URLCard";

export type TransformerCardProps = {
  transformer: Transformer
}

export function TransformerCard({ transformer }: TransformerCardProps) {
  return (
    <Card className="hover:drop-shadow-md">
      <CardHeader>
        <CardTitle>
          <div className="flex justify-between items-end">
            {transformer.title}
            <Button size="icon" variant="ghost"><MoreVertical /></Button>
          </div>
        </CardTitle>
        <CardDescription>{transformer.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <URLCard endpointTarget={transformer.endpointTarget} />
      </CardContent>
      <CardFooter>
        <Badge variant="success">20%</Badge><Badge variant="destructive">80%</Badge>
      </CardFooter>
    </Card>
  )
}