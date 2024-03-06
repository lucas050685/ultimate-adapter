import { getTemplateFromStringResponse } from './getTemplateFromStringResponse';

describe('Get template from string response', () => {
  it('Should extract the mustache template from a simple string gtp response', () => {
    const stringResponse = `{
      "address": "{{{payload.address.street}}}, {{{payload.address.city}}}, {{{payload.address.state}}}, {{{payload.address.country}}}, {{{payload.address.zipCode}}}}",
      "age": {{{payload.age}}},
      "company": "{{{payload.employment.company}}}",
      "created_at": "{{{sys.date}}}",
      "email": "{{{payload.email}}}",
      "interests": {{{payload.interests}}},
      "job": "{{{payload.employment.position}}}",
      "name": "{{{payload.firstName}}} {{{payload.lastName}}}}"
    }`;

    const template = getTemplateFromStringResponse(stringResponse);

    expect(template).toBe(`{
      "address": "{{{payload.address.street}}}, {{{payload.address.city}}}, {{{payload.address.state}}}, {{{payload.address.country}}}, {{{payload.address.zipCode}}}}",
      "age": {{{payload.age}}},
      "company": "{{{payload.employment.company}}}",
      "created_at": "{{{sys.date}}}",
      "email": "{{{payload.email}}}",
      "interests": {{{payload.interests}}},
      "job": "{{{payload.employment.position}}}",
      "name": "{{{payload.firstName}}} {{{payload.lastName}}}}"
    }`);
  });

  it('Should extract the mustache template from a simple string gtp response', () => {
    const stringResponse = `This is my suggestion to you

    \`\`\`
    {
      "address": "{{{payload.address.street}}}, {{{payload.address.city}}}, {{{payload.address.state}}}, {{{payload.address.country}}}, {{{payload.address.zipCode}}}}",
      "age": {{{payload.age}}},
      "company": "{{{payload.employment.company}}}",
      "created_at": "{{{sys.date}}}",
      "email": "{{{payload.email}}}",
      "interests": {{{payload.interests}}},
      "job": "{{{payload.employment.position}}}",
      "name": "{{{payload.firstName}}} {{{payload.lastName}}}}"
    }
    \`\`\`

    You can use this tamplete as you wish`;

    const template = getTemplateFromStringResponse(stringResponse);

    expect(template).toBe(`{
      "address": "{{{payload.address.street}}}, {{{payload.address.city}}}, {{{payload.address.state}}}, {{{payload.address.country}}}, {{{payload.address.zipCode}}}}",
      "age": {{{payload.age}}},
      "company": "{{{payload.employment.company}}}",
      "created_at": "{{{sys.date}}}",
      "email": "{{{payload.email}}}",
      "interests": {{{payload.interests}}},
      "job": "{{{payload.employment.position}}}",
      "name": "{{{payload.firstName}}} {{{payload.lastName}}}}"
    }`);
  });
});
