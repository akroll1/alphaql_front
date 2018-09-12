import React from 'react'
import './books.css'
import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";
var uuid = require('uuid4');

const GET_BOOKS = gql`
    {
        books {
            title
            author
            reviews {
                review
            }
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

                return data.books.map(({ title, author, reviews }) => (
                    <div key={title}>
                        <p>{title}</p>
                        <p>{author}</p>
                        {reviews.map(r => (
                            <p>{r.review}</p>)
                        )}
                    </div>
                ))
            }}
        </Query>

    </div>
);

const CREATE_BOOK = gql`
    mutation CreateBook($input: BookInput) {
        createBook(input: $input){
            title
            _id
        }
    }
`;

export const CreateBook = () => {
    let input = {};

    return (
        <div>
            <h1>Create A Book Record</h1>
            <Mutation mutation={CREATE_BOOK}>
                {(createBook, {data}) => {
                    console.log('data: ',data);
                    return (
                    <div>
                        <form
                            onSubmit={e => {
                                e.preventDefault();
                                createBook({
                                    variables: {
                                        input: {
                                            uuid: uuid(),
                                            title: input.title.value,
                                            author: input.author.value
                                        }
                                    }
                                });
                                input.title.value = "";
                                input.author.value = "";
                            }}
                        >
                            <label htmlFor="title">Title</label>
                            <input
                                ref={title => {
                                    input.title = title;
                                }}
                            />
                            <label htmlFor="author">Author</label>
                            <input
                                ref={author => {
                                    input.author = author;
                                }}
                            />
                            <button type="submit">Create Book</button>
                        </form>
                    </div>
                    )}}

            </Mutation>
        </div>
    );
};