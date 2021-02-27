const express = require('express');
const morgan = require('morgan');
const postRoutes = require('./routes');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use('/posts', postRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, console.log(`Server on port ${PORT}`));
