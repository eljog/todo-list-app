import express from 'express';
import bodyParser from 'body-parser';
import todoRoutes from './routes/todoRoutes';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/api/todos', todoRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
