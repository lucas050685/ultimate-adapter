import mustache from 'mustache';
import { TemplateRenderAdapter, TemplateRenderAdapterInput } from '~/core/interfaces';
import { addQuoteScape } from './addQuoteScape';
import { removeUnusedComma } from './removeUnusedComma';

export class MustacheTemplateRenderAdapter implements TemplateRenderAdapter {
  async render(template: string, input: TemplateRenderAdapterInput) {
    const scapedInput = addQuoteScape(input);
    const rendered = mustache.render(template, scapedInput);
    const normalizedRender = removeUnusedComma(rendered);
    try {
      const parsed = JSON.parse(normalizedRender);
      return parsed;
    } catch (e) {
      return rendered;
    }
  }
}
