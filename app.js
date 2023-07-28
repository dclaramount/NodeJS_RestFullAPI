const express = require(`express`);
const User = require(`./db/userModel`);

const app = express();

const dbConnect = require(`./db/dbConnect`);

dbConnect()
const newUser = new User({
  email: `john2@example.com`,
  password: `string12345`
})

newUser.save()
  .then(() => {
    console.log(`User inserted succesfully`)
  })
  .catch((error) => {
    console.log(`There was an error inserting a field with error ${error}`)
  }) 

User.find({email: `john@example.com`})
  .then((users) => {
    console.log(`User found: ${users}`)
  })
  .catch((error) => {
    console.log(`Error finding users ${error}`)
  })
/*
User.updateOne({email:`john2@example.com`}, {password:`newpassword123`})
  .then(()=>{
    console.log(`Succesfully updated user`)
  })
  .catch((error) => {
    console.log(`An error updating user with error ${error}`)
  })*/

/* User.updateMany({email:`john2@example.com`}, {$set:{passowd: `newpassword123`}})
  .then((result)=>{
    console.log(`Document updated:`, result)
  })
  .catch((error) => {
    console.log(`An error updating user with error ${error}`)
  }) */

User.deleteOne({email:`john2@example.com`})
  .then(()=>{
    console.log(`User deleted succesfully`);
  })
  .catch((error) =>{
    console.log(`Error deleting user: ${error}`)
  })

/* User.deleteMany({isActive: false})
.then(()=>{
  console.log(`Users deleted succesfully`);
})
.catch((error) =>{
  console.log(`Error deleting users: ${error}`)
}) */

module.exports = app;