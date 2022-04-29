const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const PORT = 4000;

connectDB();

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}))

app.use('/', require('./routes/bugRoutes'));

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));