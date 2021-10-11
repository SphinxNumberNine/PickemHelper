const express = require('express');
const keys = require('./config/keys')
const mongoose = require('mongoose')
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 5000;


mongoose.connect(keys.mongoURI);

require("./models/Event");
require("./models/Submission");

require("./routes/admin")(app);
require("./routes/submit")(app);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
})