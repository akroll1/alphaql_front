import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import App from './App';

const client = new ApolloClient({
    uri: "http://localhost:5000/graphql"
});

const target = document.getElementById('root');

ReactDOM.render(
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>,
    target
);