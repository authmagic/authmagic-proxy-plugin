const express = require('express');
const bodyParser = require('body-parser');
const {apiKey} = require('../params');
const app = express();
const port = 3001 || process.env.AM_PROXY_TEST_PORT;
app.use(bodyParser.json());
app.post('/proxy', (req, res) => {
  const {apiKey: bodyApiKey} = req.body;
  if(apiKey === bodyApiKey) {
    console.log(req.body);
    res.sendStatus(200);
  } else {
    console.log(`api key expected for test purpuses is "${apiKey}"`);
    res.sendStatus(403);
  }
});
app.listen(port, () => console.log(`Authmagic test app is working on port ${port}!`));