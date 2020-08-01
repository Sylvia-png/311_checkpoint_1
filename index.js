const express = require('express')
//1. import and use the bodyParser
const bodyParser = require("body-parser");
const app = express()
const port = process.env.PORT || 4000

//2. Routes
const users = require('./data/index');
const usersRoutes = require('./routes/users');
const usersCount = users.length;

app.get('/', (req, res) => res.send('default route'))


//middleware
app.use(express.static("public"));
app.use(bodyParser.json());


//routes
app.use(usersRoutes);

//error handlers
app.use(function (req, res, next) {
  res.status(404).send({ msg: `Error 404 Not Found.` })
})
///

app.get('/', (req, res) => res.send('default route'))

app.listen(port, () => {
  console.log('app is listening on:', port)
})
