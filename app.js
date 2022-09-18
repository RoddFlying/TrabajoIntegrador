const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get('/', (req, res) => {
    let htmlpath = path.resolve(__dirname, './public/index.html');
    res.sendFile(htmlpath);
  });
  