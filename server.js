const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require('morgan');
const morganBody = require('morgan-body')
const CsbInspector = require('csb-inspector');

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
morganBody(app);
CsbInspector();

app.listen(3000, () => console.log("Server running on port 3000"));

module.exports = app;