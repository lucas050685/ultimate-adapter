import { Router } from 'express';
import { transform } from '~/core/transform';
import { adapters } from '../adapters';

const router = Router();
export default router;

router.post('/:transformerId', async (req, res) => {
  const { transformerId } = req.params;
  const payload = req.body;
  const transformedPayload = await transform({ transformerId, payload }, adapters);

  res.status(200);
  return res.json(transformedPayload);
});
