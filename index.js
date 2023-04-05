const express = require('express');
const axios = require('axios');
const route = require('./src/route/route.js')
const app = express();
const cors = require("cors");

app.use(express.json())
app.use(cors())

app.use('/',route)

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});
