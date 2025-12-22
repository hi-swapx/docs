In this guide we will create a web interface that consumes and displays data from the SwapX Subgraph. The goal is to provide a quick overview of a setup that you can extend to create your own UIs and analytics around SwapX data.

Many different libraries can be used to create an interface and a connection to the subgraph graphql endpoint, but in this guide we will use [React](https://reactjs.org/) for the interface, and [Apollo Client](https://www.apollographql.com/docs/react/) for sending queries. We'll also be using yarn for dependency management.
