import express, { response } from 'express';

const app = express();

app.get('/', (req, res) => {
  return response.json({ message : 'Hello Worldd'})
});

app.listen(3333);