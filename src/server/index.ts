import 'module-alias/register';
import config from '~/config';
import app from './app';
import schemasRouter from './routes/schemas';
import tranformersRouter from './routes/transformers';
import transformRouter from './routes/transform';

app.use('/api/schemas', schemasRouter);
app.use('/api/transformers', tranformersRouter);
app.use('/api/transform', transformRouter);

const { port } = config;

app.listen(port, () => {
  console.log(`Server is running in port ${port}`);
});
