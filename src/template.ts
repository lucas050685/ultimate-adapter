export const template = `{
  "address": "{{{address.street}}}, {{{address.city}}}, {{{address.state}}}, {{{address.country}}}, {{{address.zipCode}}}",
  "age": {{age}},
  "company": "{{{employment.company}}}",
  "email": "{{{email}}}",
  "interests": [{{#interests}}"{{{.}}}",{{/interests}}],
  "jobTitle": "{{{employment.position}}}",
  "name": "{{{firstName}}} {{{lastName}}}"
}`;
