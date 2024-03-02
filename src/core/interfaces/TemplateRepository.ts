import { Template } from '../types';

export interface TemplateRepository {
  get(originSchema: string, destinySchema: string): Promise<Template>;
}
