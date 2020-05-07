import React, { Component } from "react";
import { Admin, Resource } from "react-admin";
import buildPrismaProvider, { buildQuery } from "ra-data-opencrud";
import get from "lodash/get";
import { globalText } from "./GlobalText";
import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";
import NoUserIcon from "@material-ui/icons/PeopleOutline";
import GuestIcon from "@material-ui/icons/EmojiPeople";
import BoardIcon from "@material-ui/icons/Assignment";
import RoomIcon from "@material-ui/icons/MeetingRoom";
import ReservationIcon from "@material-ui/icons/History";
import CommentIcon from "@material-ui/icons/Comment";
import EventIcon from "@material-ui/icons/Event";
import PackIcon from "@material-ui/icons/EditAttributes";
import PopupIcon from "@material-ui/icons/Announcement";
import FileIcon from "@material-ui/icons/AttachFile";
import Dashboard from "./Dashboard";
import authProvider from "./AuthProvider";
import overridenQueries from "./Queries";
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
import CommentShow from "./Components/Comment/CommentShow";
import CommentEdit from "./Components/Comment/CommentEdit";
import CommentList from "./Components/Comment/CommentList";
import EventShow from "./Components/Event/EventShow";
import EventEdit from "./Components/Event/EventEdit";
import EventList from "./Components/Event/EventList";
import EventCreate from "./Components/Event/EventCreate";
import PackShow from "./Components/Pack/PackShow";
import PackEdit from "./Components/Pack/PackEdit";
import PackList from "./Components/Pack/PackList";
import PackCreate from "./Components/Pack/PackCreate";
import PopupShow from "./Components/Popup/PopupShow";
import PopupEdit from "./Components/Popup/PopupEdit";
import PopupList from "./Components/Popup/PopupList";
import PopupCreate from "./Components/Popup/PopupCreate";

const enhanceBuildQuery = (buildQuery) => (introspectionResults) => (
  fetchType,
  resourceName,
  params
) => {
  const fragment = get(overridenQueries, `${resourceName}.${fetchType}`);
  const convertParams = SourceFilter(params, resourceName, fetchType);
  console.log(fetchType);
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
      clientOptions: { uri: process.env.REACT_APP_END_POINT },
      buildQuery: enhanceBuildQuery(buildQuery),
    }).then((dataProvider) => this.setState({ dataProvider }));
  }

  render() {
    const { dataProvider } = this.state;

    if (!dataProvider) {
      return <div>Loading</div>;
    }

    return (
      <Admin
        dataProvider={dataProvider}
        dashboard={Dashboard}
        authProvider={authProvider}
      >
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
          icon={NoUserIcon}
          list={NoUserList}
          show={NoUserShow}
          edit={NoUserEdit}
        />
        <Resource
          name="Reservation"
          options={{ label: globalText.text_reserve }}
          icon={ReservationIcon}
          show={ReservationShow}
          list={ReservationList}
          edit={ReservationEdit}
        />
        <Resource
          name="Guest"
          options={{ label: globalText.text_guest }}
          icon={GuestIcon}
          list={GuestList}
          show={GuestShow}
          edit={GuestEdit}
        />
        <Resource
          name="Event"
          options={{ label: globalText.text_event }}
          icon={EventIcon}
          show={EventShow}
          list={EventList}
          edit={EventEdit}
          create={EventCreate}
        />
        <Resource
          name="Popup"
          options={{ label: globalText.text_popup }}
          icon={PopupIcon}
          show={PopupShow}
          list={PopupList}
          edit={PopupEdit}
          create={PopupCreate}
        />
        <Resource
          name="Board"
          options={{ label: globalText.text_board }}
          icon={BoardIcon}
          list={BoardList}
          show={BoardShow}
          edit={BoardEdit}
        />
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
          name="Comment"
          options={{ label: globalText.text_comment }}
          icon={CommentIcon}
          show={CommentShow}
          list={CommentList}
          edit={CommentEdit}
        />
        <Resource
          name="Room"
          options={{ label: globalText.text_room }}
          icon={RoomIcon}
          list={RoomList}
          show={RoomShow}
          edit={RoomEdit}
          create={RoomCreate}
        />
        <Resource
          name="Pack"
          options={{ label: globalText.text_pack }}
          icon={PackIcon}
          list={PackList}
          edit={PackEdit}
          create={PackCreate}
        />
        <Resource
          name="File"
          options={{ label: globalText.text_file }}
          icon={FileIcon}
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
