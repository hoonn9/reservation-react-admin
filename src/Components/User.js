import React from "react";
import {
  List,
  SimpleList,
  Datagrid,
  TextField,
  EmailField,
  ReferenceField,
  EditButton,
  Edit,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  Create,
  Filter,
} from "react-admin";

const UserTitle = ({ record }) => {
  return <span>User {record ? `"${record.title}"` : ""}</span>;
};

export const UserList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="userId" />
      <TextField source="username" />
      <EmailField source="email" />
      <TextField source="phoneNum" />
      <TextField source="nickname" />
      <TextField source="phoneNum" />
      <TextField source="bio" />
      <TextField source="address" />
      <TextField source="createdAt" />
    </Datagrid>
  </List>
);

export const EditUser = (props) => (
  <Edit title={<UserTitle />} {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput disabled source="userId" />
      <TextInput source="username" />
      <TextInput disabled source="email" />
      <TextInput multiline source="address" />
    </SimpleForm>
  </Edit>
);
