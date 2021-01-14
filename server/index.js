const express = require('express');

const app = express();
const port = 3000;
const axios = require('axios');
const aws = require('../database/imagesBucketConfig.js');

console.log(aws);
app.get('/images', (req, res) => {
  const authString = 'AWS ' + aws.AWSAccessKeyId + ':' + aws.AWSSecretKey;
  axios.get(aws.endpoint, {
    headers: {
      Date: (new Date()).toUTCString(),
      Authorization: authString,
    },
  })
    .then((response) => res.send(response))
    .catch((err) => res.send(err));
});

app.listen(port, () => {
  console.log('Listening on port', port);
});
