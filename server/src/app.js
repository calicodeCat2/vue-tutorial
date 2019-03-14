console.log("Yo Mama")
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined'));
app.unsubscribe(bodyParser.json());
app.use(cors());

app.post('/register', (req, res) => {
    res.send({
        message: `User! You are fired. Have fun`
    })
})

app.listen(process.env.PORT || 8081);