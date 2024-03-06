import { Sys } from './types';

export async function generateSysObject(input?: generateSysObject.Input): Promise<Sys> {
  return {
    date: new Date(),
    transactionId: input?.transactionId ?? '',
  };
}

export namespace generateSysObject {
  export type Input = {
    transactionId: string | null;
  };
}
