import { Sys } from '../types';

export interface TemplateRenderAdapter {
  render(templade: string, input: TemplateRenderAdapterInput): Promise<any>;
}

export type TemplateRenderAdapterInput = {
  sys: Sys;
  payload: any;
};
