import { EndpointTarget } from './EndpointTarget';

export type Transformer = {
  id?: string;
  owner?: string;
  destinySample: string;
  destinySchema: string;
  endpointTarget?: EndpointTarget;

  title?: string;
  description?: string;
};

export type SavedTransformer = { id: string } & Transformer;
