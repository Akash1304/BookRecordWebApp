const graphql = require('graphql');
const_ = require('loadash');

const{GraphQLObjectType,GraphQLString,GraphQLSchema} = graphql;

//dummy books
var books = [
  {name:'Ramayan',genre:'Religious',id:'1'},
  {name:'Mahabharat',genre:'Religious',id:'2'},
  {name:'Gita',genre:'War',id:'3'},
]

const BookType = new GraphQLObjectType({
  name = 'Book',
  fields: () => ({
    id:{type: GraphQlString},
    name:{type: GraphQlString},
    genre:{type: GraphQlString}
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  field:() => ({
    book:{
      type: BookType,
      args:{id:{type:GraphQLString}},
      resolve(parent,args){
        //code to get data from db or other source
        return _find(books,{id:args.id})
      }
    }
  })
});

module.exports = new GraphQLSchema({
  query: RootQuery
})
