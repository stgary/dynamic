const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const app = express();

app.use(cors({
   Origin: '*',
}))
app.use(express.json());
app.use(helmet());

app.get('/', (req, res) => {
   res.send('***Server is up and running***');
});

module.exports = app;