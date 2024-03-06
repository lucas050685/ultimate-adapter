import { generateSysObject } from '~/core/generateSysObject';
import { MustacheTemplateRenderAdapter } from './MustacheTemplateRenderAdapter';
import { template } from './mocks/template';
import { payload } from './mocks/origin';

describe('Mustache template render adapter', () => {
  it('Should return a converted object', async () => {
    const sys = await generateSysObject();
    const expectedObject = {
      address: '123 Main St, Springfield, IL, USA, ',
      age: 32,
      company: 'Tech Innovations Inc.',
      email: 'alice.johnson@example.com',
      interests: ['hiking " and other', 'reading', 'cooking', 'photography'],
      jobTitle: 'Senior Software Engineer',
      name: 'Alice Johnson',
    };
    const renderAdapter = new MustacheTemplateRenderAdapter();

    const renderedObject = await renderAdapter.render(template, { sys, payload });

    expect(renderedObject).toMatchObject(expectedObject);
  });
});
