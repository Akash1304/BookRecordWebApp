const graphql = require('graphql');
const _ = require('lodash');

const{
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList
} = graphql;

//dummy books
var books = [
  {name:'The Ramayan',genre:'Religious',id:'1',authorid:'1'},
  {name:'The Mahabharat',genre:'Religious',id:'2',authorid:'2'},
  {name:'The Bhagavad Gita',genre:'Religious',id:'3',authorid:'2'},
  {name:'The Balakanda',genre:'Folk Story',id:'4',authorid:'1'},
  {name:'Mausala Parva',genre:'Folk Story',id:'5',authorid:'2'},
  {name:'Nineteen Eighty-Four',genre:'Sci-Fi',id:'6',authorid:'3'}
];

//dummy data

const authors =  [
  {name: 'Maharshi Valmiki', age: 44, id:"1"},
  {name: 'Maharshi Ved Vyasa', age: 42, id:"2"},
  {name: 'George Orwell', age: 66, id:"3"},
]

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id:{type: GraphQLID},
    name:{type: GraphQLString},
    genre:{type: GraphQLString},
    author:{
      type:AuthorType,
      resolve(parent,args){
        console.log(parent);
        return _.find(authors,{id:parent.authorid});
      }
    }
  })
});

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id:{type: GraphQLID},
    name:{type: GraphQLString},
    age:{type: GraphQLInt},
    books:{
      type: new GraphQLList(BookType),
      resolve(parent,args){
        return _.filter(books,{authorid:parent.id});
      }
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields:() => ({
    book:{
      type: BookType,
      args:{id:{type:GraphQLID}},
      resolve(parent,args){
        //code to get data from db or other source
        //console.log(args.id);
        console.log(typeof(args.id));
        return _.find(books,{id:args.id});
      }
    },
    author:{
      type: AuthorType,
      args:{id:{type:GraphQLID}},
      resolve(parent,args){
        return _.find(authors,{id:args.id});
      }
    },
    books:{
      type: new GraphQLList(BookType),
      resolve(parent,args){
        return books;
      }
    },
    authors:{
      type: new GraphQLList(AuthorType),
      resolve(parent,args){
        return authors;
      }
    }
  })
});

module.exports = new GraphQLSchema({
    query: RootQuery
});
