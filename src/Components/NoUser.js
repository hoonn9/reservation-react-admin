import React from "react";
import {
  List,
  SimpleList,
  Datagrid,
  TextField,
  EmailField,
  ReferenceField,
  SingleFieldList,
  ChipField,
  ReferenceArrayField,
  ArrayField,
  EditButton,
  Edit,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  Create,
  Filter,
} from "react-admin";

export const NoUserList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="username" />
      <EmailField source="email" />
      <TextField source="phoneNum" />
      <TextField source="bio" />
      <TextField source="createdAt" />
    </Datagrid>
  </List>
);
