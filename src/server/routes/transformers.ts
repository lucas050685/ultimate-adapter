import { Router } from 'express';
import { getTransformer } from '~/core/getTransformer';
import { getTransformerByOwner } from '~/core/getTransformerByOwner';
import { adapters } from '../adapters';
import { saveTrasnformer } from '~/core/saveTrasformer';

const router = Router();
export default router;

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const transformer = await getTransformer(id, adapters);

  if (!transformer) {
    res.status(404);
    return res.json({
      status: 'fail',
      message: `Transformer ${id} not found`,
    });
  }

  res.status(200);
  return res.json(transformer);
});

router.get('/owner/:id', async (req, res) => {
  const { id } = req.params;
  const transformers = await getTransformerByOwner(id, adapters);

  res.status(200);
  return res.json(transformers);
});

router.post('/', async (req, res) => {
  const headers = req.headers;
  const owner = headers['-x-user-id'] ?? '';
  const transformer = req.body;
  const savedTransformer = await saveTrasnformer({ ...transformer, owner }, adapters);
  res.status(200);
  res.json(savedTransformer);
});
