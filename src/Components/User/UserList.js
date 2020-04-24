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
  ShowButton,
} from "react-admin";

export default (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="userId" />
      <TextField source="username" />
      <EmailField source="email" />
      <TextField source="phoneNum" />
      <TextField source="nickname" />
      <TextField source="bio" />
      <TextField source="address" />
      <TextField source="createdAt" />
      <EditButton />
      <ShowButton />
    </Datagrid>
  </List>
);
