import React from 'react'
import './books.css'
import { Query } from "react-apollo";
import gql from "graphql-tag";

const GET_BOOKS = gql`
    {
        books {
            title
            author
        }
    }
`;

export const GetBooks = () => (
    <div>
        <h1>Get All Books</h1>
        <Query
            query={GET_BOOKS}
        >
            {({ loading, error, data }) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error :(</p>;

                return data.books.map(({ title, author }) => (
                    <div key={title}>
                        <p>{title}</p>
                        <p>{author}</p>
                    </div>
                ))
            }}
        </Query>

    </div>
);
