import React, { useState, useEffect, Component } from "react";
import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { PostList, PostEdit, PostCreate } from "./Components/Post";
import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";
import Dashboard from "./Dashboard";
import authProvider from "./AuthProvider";
import buildPrismaProvider, { buildQuery } from "ra-data-opencrud";
import overridenQueries from "./Queries";
import get from "lodash/get";
import { NoUserList } from "./Components/NoUser";
import { GuestList } from "./Components/Guest";
import { RoomList } from "./Components/Room";
import ReservationList from "./Components/Reservation/ReservationList";
import ReservationShow from "./Components/Reservation/ReservationShow";
import ReservationEdit from "./Components/Reservation/ReservationEdit";
import UserList from "./Components/User/UserList";
import UserShow from "./Components/User/UserShow";
import UserEdit from "./Components/User/UserEdit";
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
        <Resource
          name="User"
          icon={UserIcon}
          list={UserList}
          show={UserShow}
          edit={UserEdit}
        />
        <Resource name="NoUser" list={NoUserList} />
        <Resource name="Guest" list={GuestList} />
        <Resource name="Room" list={RoomList} />
        <Resource
          name="Reservation"
          show={ReservationShow}
          list={ReservationList}
          edit={ReservationEdit}
        />
      </Admin>
    );
  }
}

export default App;
