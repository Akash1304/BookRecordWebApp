const express = require('express');
const qraphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')

const app = express();


app.use('/graphql',qraphqlHTTP({
  //if names are different schema: name have to be followed
  //schema
}));

app.listen(4000,() =>{
  console.log("Server Started on port 4000");
});
