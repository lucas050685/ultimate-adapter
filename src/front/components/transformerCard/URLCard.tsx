import { Copy } from "lucide-react"
import { EndpointTarget } from "~/core/types"
import {
  Button,
  useDrawer,
  Card,
} from "~/front/components/ui";
import { Nuke } from "~/front/components/nuke";

export type URLCardPropos = {
  endpointTarget?: EndpointTarget
}

export function URLCard({ endpointTarget }: URLCardPropos) {
  const { push } = useDrawer();

  if (!endpointTarget) return null;

  const method = endpointTarget.method ?? 'default';
  const methodName = method.toUpperCase();
  const methodVariants = {
    post: 'success',
    put: 'action',
    patch: 'default',
    default: 'secondary',
    delete: 'descructive',
    get: 'link'
  };
  const methodButtonVariant = methodVariants[method];

  return (
    <Card>
      <div className="flex justify-between items-center group">
        <Button onClick={() => push(<Nuke />)} variant={methodButtonVariant as any}>{methodName}</Button>
        <span className="mx-4 grow">{endpointTarget?.url}</span>
        <Button size="icon" variant={"ghost"} className="invisible group-hover:visible"><Copy /></Button>
      </div>
    </Card>
  )
}