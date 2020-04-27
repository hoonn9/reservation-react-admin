import React, { useState, useEffect, Component } from "react";
import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { globalText } from "./GlobalText";
import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";
import Dashboard from "./Dashboard";
import authProvider from "./AuthProvider";
import buildPrismaProvider, { buildQuery } from "ra-data-opencrud";
import overridenQueries from "./Queries";
import get from "lodash/get";
import ReservationList from "./Components/Reservation/ReservationList";
import ReservationShow from "./Components/Reservation/ReservationShow";
import ReservationEdit from "./Components/Reservation/ReservationEdit";
import UserList from "./Components/User/UserList";
import UserShow from "./Components/User/UserShow";
import UserEdit from "./Components/User/UserEdit";
import SourceFilter from "./Components/SourceFilter";
import PostShow from "./Components/Post/PostShow";
import PostEdit from "./Components/Post/PostEdit";
import PostList from "./Components/Post/PostList";
import PostCreate from "./Components/Post/PostCreate";
import BoardList from "./Components/Board/BoardList";
import BoardShow from "./Components/Board/BoardShow";
import BoardEdit from "./Components/Board/BoardEdit";
import NoUserList from "./Components/NoUser/NoUserList";
import NoUserEdit from "./Components/NoUser/NoUserEdit";
import NoUserShow from "./Components/NoUser/NoUserShow";
import GuestList from "./Components/Guest/GuestList";
import GuestEdit from "./Components/Guest/GuestEdit";
import GuestShow from "./Components/Guest/GuestShow";
import RoomShow from "./Components/Room/RoomShow";
import RoomEdit from "./Components/Room/RoomEdit";
import RoomList from "./Components/Room/RoomList";
import RoomCreate from "./Components/Room/RoomCreate";
import FileShow from "./Components/File/FileShow";
import FileEdit from "./Components/File/FileEdit";
import FileList from "./Components/File/FileList";
import FileCreate from "./Components/File/FileCreate";
//const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const enhanceBuildQuery = (buildQuery) => (introspectionResults) => (
  fetchType,
  resourceName,
  params
) => {
  const fragment = get(overridenQueries, `${resourceName}.${fetchType}`);
  const convertParams = SourceFilter(params, resourceName, fetchType);
  console.log(convertParams);
  return buildQuery(introspectionResults)(
    fetchType,
    resourceName,
    convertParams,
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
        <Resource
          name="Post"
          options={{ label: globalText.text_post }}
          icon={PostIcon}
          list={PostList}
          show={PostShow}
          create={PostCreate}
          edit={PostEdit}
        />
        <Resource
          name="Board"
          options={{ label: globalText.text_board }}
          icon={PostIcon}
          list={BoardList}
          show={BoardShow}
          edit={BoardEdit}
        />
        <Resource
          name="User"
          options={{ label: globalText.text_member }}
          icon={UserIcon}
          list={UserList}
          show={UserShow}
          edit={UserEdit}
        />
        <Resource
          name="NoUser"
          options={{ label: globalText.text_no_member }}
          icon={UserIcon}
          list={NoUserList}
          show={NoUserShow}
          edit={NoUserEdit}
        />
        <Resource
          name="Guest"
          options={{ label: globalText.text_guest }}
          list={GuestList}
          show={GuestShow}
          edit={GuestEdit}
        />
        <Resource
          name="Room"
          options={{ label: globalText.text_room }}
          list={RoomList}
          show={RoomShow}
          edit={RoomEdit}
          create={RoomCreate}
        />
        <Resource
          name="Reservation"
          options={{ label: globalText.text_reserve }}
          show={ReservationShow}
          list={ReservationList}
          edit={ReservationEdit}
        />
        <Resource
          name="File"
          options={{ label: globalText.text_file }}
          show={FileShow}
          list={FileList}
          edit={FileEdit}
          create={FileCreate}
        />
      </Admin>
    );
  }
}

export default App;
