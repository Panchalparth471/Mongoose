//Importing Express.js
const express = require('express');
const app = express();

//Using bodyparser to parse the data
const bodyParser = require('body-parser');
app.use(bodyParser.json());

//The server is established in port 3000
app.listen(3000, () => {
    console.log('Server Established');
});

//Routing through the server
app.get('/', (req, res) => {
    res.send('Hello JEE');
})

app.post('/api/cars', (req, res) => {
    const { name, brand } = req.body;
    console.log(name);
    console.log(brand);
    res.send('Hello jee this is post request');
})

//Connecting our Express.js server to the database
const mongoose = require('mongoose');
   mongoose.connect('mongodb://127.0.0.1:27017/Cars', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => { console.log("Connection Done") })
.catch((error) => { console.log("Recieved An Error") })
