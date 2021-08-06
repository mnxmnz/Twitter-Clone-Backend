const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello express');
});

app.get('/api', (req, res) => {
  res.send('Hello api');
});

app.get('/api/posts', (req, res) => {
  res.json([
    { id: 1, content: 'Hello 1' },
    { id: 2, content: 'Hello 2' },
    { id: 3, content: 'Hello 3' },
  ]);
});

app.post('/api/post', (req, res) => {
  res.json({ id: 1, content: 'Hello 1' });
});

app.delete('/api/post', (req, res) => {
  res.json({ id: 1 });
});

app.listen(3065, () => {
  console.log('Server running');
});
