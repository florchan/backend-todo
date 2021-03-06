const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const todoRouter = require('./router/todoRouter');

require('dotenv').config();

const app = express();

app.use(cors())
app.use(express.json())
const port = process.env.PORT || 5000
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
})


app.use('/', todoRouter);

app.listen(port);