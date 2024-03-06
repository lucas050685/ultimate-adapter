import { failTemplate, failTemplate2, template } from './mocks/template';
import { addMissingCommas } from './addMissingCommas';

describe('Add missing commas', () => {
  it('Should add a missing comma into an array loop template', () => {
    const template = failTemplate;

    const fixedTemplate = addMissingCommas(template);

    expect(fixedTemplate).toBe(`{
  "address": "{{{payload.address.street}}}, {{{payload.address.city}}}, {{{payload.address.state}}}, {{{payload.address.country}}}, {{{payload.address.zipCode}}}",
  "age": {{{payload.age}}},
  "company": "{{{payload.employment.company}}}",
  "created_at": "{{{sys.date}}}",
  "email": "{{{payload.email}}}",
  "interests": [
    {{#payload.interests}}
    "{{{.}}}",
    {{/payload.interests}}
  ],
  "job": "{{{payload.employment.position}}}",
  "name": "{{{payload.firstName}}} {{{payload.lastName}}}"
}`);
  });

  it('Should not add comma in a corret template', () => {
    const fixedTemplate = addMissingCommas(template);
    expect(fixedTemplate).toBe(template);
  });
});
