const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// database
const db = require("./app/models");
const Role = db.role;

// Results will be an empty array and metadata will contain the number of affected rows.
db.sequelize.sync();
// force: true will drop the table if it already exists
/*
//run on first start only to initialize tables
db.sequelize.sync({force: true}).then(() => {

	console.log('Drop and Resync Database with { force: true }');
initial();
});
*/
// simple route
/*
app.get("/", (req, res) => {
  res.json({ message: "Welcome" });
});
*/
// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}