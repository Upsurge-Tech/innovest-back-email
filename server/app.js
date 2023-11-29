const express = require('express');
const cors = require('cors')
require('dotenv').config();
const port = process.env.PORT;
const mailRouter = require('./routes/mail_route');
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }))
app.use(express.json());


app.listen(port, () => {
    console.log('server connected')
})

app.use('/mail', mailRouter);


