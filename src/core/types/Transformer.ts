import { EndpointTarget, Method } from './EndpointTarget';

export type Transformer = {
  id?: string;
  owner?: string;
  destinySample: string;
  destinySchema: string;
  endpointTarget?: EndpointTarget;
};

export type SavedTransformer = { id: string } & Transformer;
