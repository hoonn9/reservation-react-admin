import React from "react";
import {
  List,
  SimpleList,
  Datagrid,
  TextField,
  EmailField,
  ReferenceField,
  EditButton,
  TextInput,
  SelectInput,
  Filter,
  ShowButton,
  DateField,
} from "react-admin";
import { useMediaQuery } from "@material-ui/core";
import { globalText } from "../../GlobalText";

const GuestFilter = (props) => (
  <Filter {...props}>
    <TextInput label="ID" source="id" alwaysOn />
    <TextInput label={globalText.text_phone_num} source="phoneNum" alwaysOn />
    <TextInput label={globalText.text_username} source="username" />
    <SelectInput
      label={globalText.text_bio}
      source="bio"
      choices={[
        { id: "남", name: "남" },
        { id: "여", name: "여" },
      ]}
    />
  </Filter>
);

export default (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <List {...props} filters={<GuestFilter />}>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.id}
          secondaryText={(record) => record.phoneNum}
          tertiaryText={(record) => record.username}
        />
      ) : (
        <Datagrid rowClick="show">
          <TextField label={`${globalText.text_member} ID`} source="id" />
          <TextField label={globalText.text_username} source="username" />
          <EmailField label={globalText.text_email} source="email" />
          <TextField label={globalText.text_phone_num} source="phoneNum" />
          <TextField label={globalText.text_bio} source="bio" />
          <ReferenceField
            label={globalText.text_reserve}
            source="reservation.id"
            reference="Reservation"
          >
            <TextField source="id" />
          </ReferenceField>
          <DateField
            showTime
            label={globalText.text_createdAt}
            source="createdAt"
          />
          <EditButton />
          <ShowButton />
        </Datagrid>
      )}
    </List>
  );
};
