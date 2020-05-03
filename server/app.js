const express = require('express');
const qraphqlHTTP = require('express-graphql')
const mongoose = require('mongoose')
const cors = require('cors')


//Schema
const schema = require('./schema/schema')

const app = express();
mongoose.connect('mongodb://akash:test123@ds121599.mlab.com:21599/book-records');
mongoose.connection.once('open',()=>{
  console.log("Connected to the database.");
})

//allow cross-origin requests
app.use(cors())


app.use('/graphql',qraphqlHTTP({
  //if names are different schema: name have to be followed
  schema,
  graphiql:true
}));

app.listen(4000,() =>{
  console.log("Server Started on port 4000");
});
