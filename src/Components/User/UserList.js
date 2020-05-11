import React from "react";
import {
  List,
  SimpleList,
  Datagrid,
  TextField,
  EmailField,
  EditButton,
  TextInput,
  SelectInput,
  Filter,
  ShowButton,
  DateField,
} from "react-admin";
import { useMediaQuery } from "@material-ui/core";
import { globalText } from "../../GlobalText";

const SimpleUserList = (props) => (
  <SimpleList
    {...props}
    primaryText={(record) => record.id}
    secondaryText={(record) => record.email}
    tertiaryText={(record) => record.userId}
  />
);

const UserFilter = (props) => (
  <Filter {...props}>
    <TextInput label="ID" source="id" alwaysOn />
    <TextInput label={globalText.text_nickname} source="nickname" alwaysOn />
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
    <List {...props} filters={<UserFilter />}>
      {isSmall ? (
        <SimpleUserList {...props} />
      ) : (
        <Datagrid rowClick="show">
          <TextField label={`${globalText.text_member} ID`} source="id" />
          <TextField label={globalText.text_id} source="userId" />
          <TextField label={globalText.text_username} source="username" />
          <EmailField label={globalText.text_email} source="email" />
          <TextField label={globalText.text_phone_num} source="phoneNum" />
          <TextField label={globalText.text_nickname} source="nickname" />
          <TextField label={globalText.text_bio} source="bio" />
          <TextField label={globalText.text_address} source="address" />
          <DateField
            showTime
            label={globalText.text_user_createdAt}
            source="createdAt"
          />
          <EditButton />
          <ShowButton />
        </Datagrid>
      )}
    </List>
  );
};
