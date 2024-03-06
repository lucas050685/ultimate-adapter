import { TypeSchema } from './TypeSchema';

describe('Type Schema from object', () => {
  it('Should convert a simple type', () => {
    const payload = 'text';
    const expectedSchemaString = 'type Payload = string;';

    const schema = TypeSchema.from(payload);
    const schemaString = schema.toString();

    expect(schemaString).toBe(expectedSchemaString);
  });

  it('Should convert a simple object to a schema string', () => {
    const payload = { name: 'test' };
    const expectedSchemaString = 'type Payload = {\n' + '    name: string;\n' + '};';

    const schema = TypeSchema.from(payload);
    const schemaString = schema.toString();

    expect(schemaString).toBe(expectedSchemaString);
  });

  it('Should convert a nested object', () => {
    const payload = { user: { name: 'John', age: 31 } };
    const expectedSchemaString =
      'type Payload = {\n' + '    user: {\n' + '        age: number;\n' + '        name: string;\n' + '    };\n' + '};';

    const schema = TypeSchema.from(payload);
    const schemaString = schema.toString();

    expect(schemaString).toBe(expectedSchemaString);
  });

  it('Should convert an array object', () => {
    const payload = ['bananas', 'apples'];
    const expectedSchemaString = 'type Payload = Array<string>;';

    const schema = TypeSchema.from(payload);
    const schemaString = schema.toString();

    expect(schemaString).toBe(expectedSchemaString);
  });

  it('Should convert a nested array object', () => {
    const payload = { fruits: ['bananas', 'apples'] };
    const expectedSchemaString = 'type Payload = {\n    fruits: Array<string>;\n};';

    const schema = TypeSchema.from(payload);
    const schemaString = schema.toString();

    expect(schemaString).toBe(expectedSchemaString);
  });

  it('Should convert a nested complex array object', () => {
    const payload = { fruits: [{ id: 1 }] };
    const expectedSchemaString =
      'type Payload = {\n' + '    fruits: Array<{\n' + '        id: number;\n' + '    }>;\n' + '};';

    const schema = TypeSchema.from(payload);
    const schemaString = schema.toString();

    expect(schemaString).toBe(expectedSchemaString);
  });
});

describe('Type schema parser', () => {
  it('Should parse a simple type', () => {
    const payload = 'type Payload = string;';

    const schema = TypeSchema.parse(payload);

    expect(schema instanceof TypeSchema).toBe(true);
    expect(schema.type).toBe('string');
    expect(schema.toString()).toBe(payload);
  });

  it('Should parse a simple object type ', () => {
    const payload = 'type Payload = { name: string; };';

    const schema = TypeSchema.parse(payload);

    expect(schema instanceof TypeSchema).toBe(true);
    expect(schema.type).toBe('object');
    expect(schema.attrs.get('name') instanceof TypeSchema).toBe(true);
  });

  it('Should parse a nested object type, the string should be ordered', () => {
    const payload =
      'type Payload = { name: string; user: {id: number; address: string; phone: string; }; age: number };';

    const schema = TypeSchema.parse(payload);

    expect(schema instanceof TypeSchema).toBe(true);
    expect(schema.type).toBe('object');
    expect(schema.attrs.get('name') instanceof TypeSchema).toBe(true);
    expect(schema.attrs.get('user') instanceof TypeSchema).toBe(true);
    expect(schema.attrs.get('age') instanceof TypeSchema).toBe(true);
    expect(schema.attrs.get('id') instanceof TypeSchema).toBe(false);
    expect(schema.toString()).toBe(`type Payload = {
    age: number;
    name: string;
    user: {
        address: string;
        id: number;
        phone: string;
    };
};`);
  });

  it('Should parse a simple array type', () => {
    const payload = 'type Payload = Array<string>;';

    const schema = TypeSchema.parse(payload);

    expect(schema.toString()).toBe(payload);
  });

  it('Should parse a simple array type', () => {
    const payload = 'type Payload = Array<{user: string; name: string}>;';

    const schema = TypeSchema.parse(payload);

    expect(schema.toString()).toBe(`type Payload = Array<{
    name: string;
    user: string;
}>;`);
  });
});
