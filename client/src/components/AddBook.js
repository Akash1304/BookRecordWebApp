import React,{Component} from 'react';
//import gql from 'graphql-tag';
import {gql} from 'apollo-boost'
import {graphql} from 'react-apollo'
//import { useQuery } from '@apollo/react-hooks';
import {getAuthorsQuery} from '../queries/queries'

// const getAuthorsQuery = gql`
//     {
//         authors {
//             name
//             id
//         }
//     }
// `

class AddBook extends Component{
  displayAuthors(){
    //const { loading, error, data } = useQuery(getAuthorsQuery);
    var data = this.props.data;
    if (data.loading) return <option disabled>Loading Authors...</option>;
    //console.log(data);

    return data.authors.map(author => {
      return(
        <option key = {author.id} value = {author.id}>{author.name}</option>
      )
    })
  }
  render(){
    return(
      <form id="add-book">

        <div className="field">
          <label>Book name:</label>
          <input type="text" />
        </div>

        <div className="field">
          <label>Genre:</label>
          <input type="text"/>
        </div>

        <div className="field">
          <label>Author:</label>
          <select>
            <option>Select author</option>
            {this.displayAuthors()}
          </select>
        </div>

        <button type="button">+</button>
      </form>

    )
  }
}


export default graphql(getAuthorsQuery)(AddBook);
