import { ObjectId } from 'mongodb';
import { TransformerRepository } from '~/core/interfaces';
import { SavedTransformer, Transformer } from '~/core/types';
import { getDatabase } from './db';

export class MongoTransformerRepository implements TransformerRepository {
  async getCollection() {
    const db = await getDatabase();
    const collection = db.collection('transformer');
    return collection;
  }

  async get(id: string): Promise<SavedTransformer | undefined> {
    const collection = await this.getCollection();
    const _id = new ObjectId(id);
    const document = await collection.findOne<Transformer>({ _id });
    if (!document) return;
    return {
      ...document,
      id
    };
  }

  async getByOwnerId(owner: string): Promise<SavedTransformer[]> {
    const collection = await this.getCollection();
    const transformers = await collection.find<SavedTransformer & { _id: ObjectId }>({ owner }).toArray();
    return transformers.map((transformer) => {
      const id = transformer._id.toString();
      return { ...transformer, id }
    });
  }

  async save(transformer: Transformer | SavedTransformer): Promise<SavedTransformer> {
    const collection = await this.getCollection();
    const insertedResult = await collection.insertOne({ ...transformer });
    const id = insertedResult.insertedId.toString();
    return {
      id,
      ...transformer
    };
  }
}