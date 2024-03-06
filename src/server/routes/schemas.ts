import { Router } from 'express';
import { generateSchema } from '~/core/generateSchema';

const router = Router();
export default router;

router.post('/convert', async (req, res) => {
  const payload = req.body;
  const schema = await generateSchema(payload);

  res.status(200);
  res.json({ schema });
});
