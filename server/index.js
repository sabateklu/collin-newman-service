const express = require('express');
const parser = require('body-parser');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(parser());

app.get('/api/reviews', (req, res) => {

});

app.post('/api/reviews', (req, res) => {

});

app.patch('/api/reviews/:id', (req, res) => {

});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', port);
});
