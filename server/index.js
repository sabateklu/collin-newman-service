const express = require('express');
const parser = require('body-parser');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(parser());

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', port);
});
