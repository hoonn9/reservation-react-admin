import React, { useState, useEffect, Component } from "react";
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList, EditUser } from "./Components/User";
import { PostList, PostEdit, PostCreate } from "./Components/Post";
import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";
import Dashboard from "./Dashboard";
import authProvider from "./AuthProvider";
import DataProvider from "./DataProvider";
import buildPrismaProvider, { buildQuery } from "ra-data-opencrud";
import overridenQueries from "./Queries";
import ApolloClient from "apollo-boost";
import get from "lodash/get";
//const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const enhanceBuildQuery = (buildQuery) => (introspectionResults) => (
  fetchType,
  resourceName,
  params
) => {
  console.log("체크");
  console.log(fetchType, resourceName, params);
  const fragment = get(overridenQueries, `${resourceName}.${fetchType}`);

  return buildQuery(introspectionResults)(
    fetchType,
    resourceName,
    params,
    fragment
  );
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { dataProvider: null };
  }

  componentDidMount() {
    buildPrismaProvider({
      clientOptions: { uri: process.env.REACT_APP_PROD_URL },
      buildQuery: enhanceBuildQuery(buildQuery),
    }).then((dataProvider) => this.setState({ dataProvider }));
  }

  render() {
    const { dataProvider } = this.state;

    if (!dataProvider) {
      return <div>Loading</div>;
    }

    return (
      <Admin dataProvider={dataProvider}>
        <Resource name="Post" icon={PostIcon} list={PostList} />
      </Admin>
    );
  }
}

export default App;
