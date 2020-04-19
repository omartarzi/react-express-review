const express = require('express');
const bodyParser = require('body-parser'); //parses DOM to the req.body
const morgan = require('morgan'); //development tool that logs a lot of things in express for you that you can check later (it will come up in nodemon stuff);
const cors = require('cors'); //about cross origin stuff. allows it so that any type of resoruce accessing your server can access it (not to do in real workd)
const path = require('path'); //pathing you will see later
const router = require('./router'); //for routing purposes later on

const app = express()
const port = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(cors());
// app.use('/')

app.get('/name', (req, res) => res.send('Omar'));
app.use('/api', router); //just like localhost/3000/name, these are endpoints (name and api) and can be called whatever u want. when it gets here, it'll go to your router file so that when it goes to localhost/3000/api and it gets a get request, it'll go to the router and then go to the controller to access all the data. endpoint is set to router
app.use('/', express.static(path.join(__dirname, '../client/dist'))); //asking where your static files are gonna be distributed to the front end where someone browsing would see them. must be SECOND TO LAST

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`)); //last thing in express should always be app.listen

