import React from "react";
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList } from "./user";
import { PostList, PostEdit, PostCreate } from "./posts";
import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";
import Dashboard from "./Dashboard";
import authProvider from "./AuthProvider";
import DataProvider from "./DataProvider";
const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => {
  return (
    <Admin
      authProvider={authProvider}
      dashboard={Dashboard}
      dataProvider={DataProvider}
    >
      <Resource
        name="post"
        icon={PostIcon}
        list={PostList}
        edit={PostEdit}
        create={PostCreate}
      />
      <Resource name="users" icon={UserIcon} list={UserList} />
    </Admin>
  );
};

export default App;
