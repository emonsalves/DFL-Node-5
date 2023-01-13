const express = require("express");
const app = express();
require('dotenv').config();


const cors = require("cors");
const morgan = require('morgan');
const morganBody = require('morgan-body')
const CsbInspector = require('csb-inspector');
const {controlQuery} = require('./src/middlewares/controlQuery')

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
// app.use(morgan('dev'));
app.use(controlQuery)
// morganBody(app);
CsbInspector();

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;