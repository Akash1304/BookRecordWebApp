import {gql} from 'apollo-boost'

const getAuthorsQuery = gql`
    {
        authors {
            name
            id
        }
    }
`

const getBooksQuery = gql`
    {
        books {
            id
            name
            genre
        }
    }
`

export {getAuthorsQuery,getBooksQuery};
