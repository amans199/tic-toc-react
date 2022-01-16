import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

import './index.css';
// const { graphql, buildSchema } = require('graphql');

import App from './App';
import reportWebVitals from './reportWebVitals';


const client = new ApolloClient({
  playground: true,
  // uri: 'https://48p1r2roz4.sse.codesandbox.io',
  uri: 'http://localhost:3000/playground',
  cache: new InMemoryCache()
});



ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client} >
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
