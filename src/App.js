import React, { useState, useEffect, Component } from "react";
import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { UserList, EditUser } from "./Components/User";
import { PostList, PostEdit, PostCreate } from "./Components/Post";
import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";
import Dashboard from "./Dashboard";
import authProvider from "./AuthProvider";
import buildPrismaProvider, { buildQuery } from "ra-data-opencrud";
import overridenQueries from "./Queries";
import get from "lodash/get";
import { ReservationList, ReservationShow } from "./Components/Reservation";
import { NoUserList } from "./Components/NoUser";
import { GuestList } from "./Components/Guest";
import { RoomList } from "./Components/Room";
//const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const enhanceBuildQuery = (buildQuery) => (introspectionResults) => (
  fetchType,
  resourceName,
  params
) => {
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
        <Resource name="User" icon={UserIcon} list={UserList} />
        <Resource name="NoUser" list={NoUserList} />
        <Resource name="Guest" list={GuestList} />
        <Resource name="Room" list={RoomList} />
        <Resource
          name="Reservation"
          list={ReservationList}
          show={ReservationShow}
        />
      </Admin>
    );
  }
}

export default App;
