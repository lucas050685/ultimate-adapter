export const template = `{
  "address": "{{{payload.address.street}}}, {{{payload.address.city}}}, {{{payload.address.state}}}, {{{payload.address.country}}}, {{{address.zipCode}}}",
  "age": {{payload.age}},
  "company": "{{{payload.employment.company}}}",
  "email": "{{{payload.email}}}",
  "interests": [{{#payload.interests}}"{{{.}}}",{{/payload.interests}}],
  "jobTitle": "{{{payload.employment.position}}}",
  "name": "{{{payload.firstName}}} {{{payload.lastName}}}"
}`;

export const failTemplate = `{
  "address": "{{{payload.address.street}}}, {{{payload.address.city}}}, {{{payload.address.state}}}, {{{payload.address.country}}}, {{{payload.address.zipCode}}}",
  "age": {{{payload.age}}},
  "company": "{{{payload.employment.company}}}",
  "created_at": "{{{sys.date}}}",
  "email": "{{{payload.email}}}",
  "interests": [
    {{#payload.interests}}
    "{{{.}}}"
    {{/payload.interests}}
  ],
  "job": "{{{payload.employment.position}}}",
  "name": "{{{payload.firstName}}} {{{payload.lastName}}}"
}`;

export const failTemplate2 = `{
  "address": "{{{payload.address.street}}}, {{{payload.address.city}}}, {{{payload.address.state}}}, {{{payload.address.country}}}, {{{payload.address.zipCode}}}",
  "age": {{{payload.age}}},
  "company": "{{{payload.employment.company}}}",
  "created_at": "{{{sys.date}}}",
  "email": "{{{payload.email}}}",
  "interests": [
    {{#payload.interests}}
    "{{{.}}}"
    {{/payload.interests}}
  ],
  "works": [
    {{#payload.works}}
    "{{{.}}}"
    {{/payload.works}}
  ],
  "job": "{{{payload.employment.position}}}",
  "name": "{{{payload.firstName}}} {{{payload.lastName}}}"
}`;
