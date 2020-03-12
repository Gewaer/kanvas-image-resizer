require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const app = express();
const controllers = require('./controllers');

app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3000;

app.use('/v1', controllers);
app.get('/', (req, res) => res.end('kanvas-image-resizer up and running'))
app.get('/status', (req, res) => res.json({ status: 'ok' }))

app.listen(PORT, () => {
  console.log(`kanvas-image-resizer listening on port ${PORT}`)
})
