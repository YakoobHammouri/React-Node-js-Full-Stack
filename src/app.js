const express = require('express');

const app = express();

app.get('/api/user', (req, res) => {
  res.json(['test1', 'test2', 'test3']);
});

app.listen(3001, () => console.log('the server run in port 3001'));
