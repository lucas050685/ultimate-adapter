import { removeUnusedComma } from './removeUnusedComma';

describe('Remove unused comma', () => {
  it('Should remove an unused comma in a object string representation', () => {
    const input = '["bananas", "apples", ]';

    const parsed = removeUnusedComma(input);

    expect(parsed).toBe('["bananas", "apples"]');
  });

  it.skip('Should not remove commas inside quotes', () => {
    const input = '["bananas", "apples", "example[,]",]';

    const parsed = removeUnusedComma(input);

    expect(parsed).toBe('["bananas", "apples", "example[,]"]');
  });

  it('Should remove commas in complex objects', () => {
    const input = '{ name: "Brian", fruits: ["bananas", "apples", "example[,]",], hobbies: "none" }';

    const parsed = removeUnusedComma(input);

    expect(parsed).toBe('{ name: "Brian", fruits: ["bananas", "apples", "example[]"], hobbies: "none" }');
  });
});
