const instruction0 = `
Create a mustache template that generates a json object.
This json object must meet the following typing:
`;

const instruction1 = `
The source payload for this template must comply with the following typing:
`;

const instruction2 = `
In the destination object, try to group fields with the same characteristics 
or objectives from the source payload.
`;

const instruction3 = `
If any field in the destination does not have a clear match in the source,
create a validation so that this field is not created in the destination.
That is, treat the field as an optional field and only insert it in the destination 
if there is corresponding information in the source.
`;

const instruction4 = `
use the pattern triple mustache: {{{name}}} to not scape any special chars.
`;

export const instructions = [instruction0, instruction1, instruction2, instruction3, instruction4];
