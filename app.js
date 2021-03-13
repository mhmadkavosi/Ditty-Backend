const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });

const app = express();

// Create Server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});

// Middlewares

app.use(morgan('dev'));
app.use(express.json());

// Connect to db
const db = process.env.LOCAL_DATABASE;
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: false,
    useFindAndModify: false,
    useUnifiedTopology: true,
    config: { autoIndex: false },
  })
  .then(() => console.log('Database was successfuly connected....!'));
