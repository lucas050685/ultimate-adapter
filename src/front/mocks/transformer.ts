import { Transformer } from "~/core/types";
import { TypeSchema } from "~/core/class/TypeSchema";
import { sample } from "./sample";

const sampleSchema = TypeSchema.from(sample);

export const transformers: Transformer[] = [
  {
    title: 'My first transformer',
    description: 'This is the description of my first transformer',

    destinySample: JSON.stringify(sample),
    destinySchema: sampleSchema.toString(),
    endpointTarget: {
      headers: [],
      method: "put",
      url: 'http://localhost:3003/user/save'
    }
  },
  {
    title: 'Another Transformer mock',
    description: 'This is just another transformer',

    destinySample: JSON.stringify(sample),
    destinySchema: sampleSchema.toString(),
  }
]

export const transformer = transformers[0];