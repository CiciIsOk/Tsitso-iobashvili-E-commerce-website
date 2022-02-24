import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Navbar from "./components/Navbar/Navbar";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
});

export class App extends Component {
  render() {
    return (
      <main>
        <ApolloProvider client={client}>
          <Navbar />
        </ApolloProvider>
      </main>
    );
  }
}

export default App;
