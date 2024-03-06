import { addQuoteScape } from './addQuoteScape';

describe('Add comma scape', () => {
  it('Should add a quote scape in a simple string', () => {
    const input = 'this is my "quote" example';

    const scaped = addQuoteScape(input);

    expect(scaped).toBe('this is my \\"quote\\" example');
  });

  it('Should add a quote scape in a complex object', () => {
    const input = { example: 'this is my "quote" example' };
    const slash = '\\';
    const expectedResult = { example: `this is my ${slash}"quote${slash}" example` };

    const scaped = addQuoteScape(input);

    expect(scaped.example).toBe(expectedResult.example);
  });

  it('Should add a quote scape in an array of strings', () => {
    // eslint-disable-next-line quotes
    const input = ['this is my "quote" example', "nothing to 'change'"];
    const slash = '\\';
    const expectedResult = [`this is my ${slash}"quote${slash}" example`];

    const scaped = addQuoteScape(input);

    expect(scaped[0]).toBe(expectedResult[0]);
  });
});
