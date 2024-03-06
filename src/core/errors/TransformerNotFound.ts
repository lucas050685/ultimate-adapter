import { StandardError } from './StandardError';

export class TransformerNotFound extends StandardError {
  constructor(transformerId: string) {
    const message = `Transformer ${transformerId} not found`;
    const status = 404;
    super(message, status);
  }
}
