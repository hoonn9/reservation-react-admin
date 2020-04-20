import React from "react";
import {
  List,
  SimpleList,
  Datagrid,
  TextField,
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

export const ReservationList = (props) => {
  console.log(props);
  //const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <ReferenceField source="user.id" reference="User">
          <TextField source="id" />
        </ReferenceField>
        <ReferenceField source="noUser.id" reference="NoUser">
          <TextField source="id" />
        </ReferenceField>
        <ReferenceField source="guest.id" reference="Guest">
          <TextField source="id" />
        </ReferenceField>
        <ReferenceField source="subType.id" reference="SubType">
          <TextField source="id" />
        </ReferenceField>
        <TextField source="checkIn" />
        <TextField source="checkOut" />
        <TextField source="count" />
        <TextField source="needs" />
        <TextField source="adult" />
        <TextField source="child" />
        <TextField source="createdAt" />
        <EditButton />
      </Datagrid>
    </List>
  );
};
