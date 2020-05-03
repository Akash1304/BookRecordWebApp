import React,{Component} from 'react';
//import gql from 'graphql-tag';
import {gql} from 'apollo-boost'
import {graphql} from 'react-apollo'
//import { useQuery } from '@apollo/react-hooks';
import {getBooksQuery} from '../queries/queries'

// const getBooksQuery = gql`
//     {
//         books {
//             id
//             name
//             genre
//         }
//     }
// `

//For Hook

// function displayBooks(data){
//   //console.log(data);
//   return data.books.map(book => {
//     return(
//       <li key = {book.id}>{book.name}</li>
//     )
//   })
// }
// function BookList() {
//     const { loading, error, data } = useQuery(getBooksQuery);
//     if (loading) return <li>Loading Books...</li>;
//     if (error) return `Error! ${error.message}`;
//
//     return (
//         <div>
//             <ul id="book-list">
//               <li>Book name</li>
//               {displayBooks(data)}
//             </ul>
//         </div>
//     );
// }

class BookList extends Component{
  displayBooks(){
    //const { loading, error, data } = useQuery(getAuthorsQuery);
    var data = this.props.data;
    if (data.loading) return <li disabled>Loading Books...</li>;
    //console.log(data);

    return data.books.map(book => {
      return(
        <li key = {book.id}>{book.name}</li>
      )
    })
  }
  render(){
    return(
      <div>
          <ul id="book-list">
            <li>Book name</li>
            {this.displayBooks()}
          </ul>
      </div>
    )
  }
}


export default graphql(getBooksQuery)(BookList);

//export default BookList;
