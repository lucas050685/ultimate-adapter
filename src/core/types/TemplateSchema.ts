import { Template } from './Template';

export type TemplateSchema = {
  id?: string;
  template: Template;
  originSchema: string;
  destinySchema: string;
};

export type SavedTemplateSchema = { id: string } & TemplateSchema;
