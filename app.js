const express = require(`express`);
const User = require(`./db/userModel`);

const app = express();

const dbConnect = require(`./db/dbConnect`);

dbConnect()
const newUser = new User({
  email: `john@example.com`,
  password: `string123`
})

newUser.save()
  .then(() => {
    console.log(`User inserted succesfully`)
  })
  .catch((error) => {
    console.log(`There was an error inserting a field with error ${error}`)
  })

module.exports = app;