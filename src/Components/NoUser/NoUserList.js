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
  DateField,
  ReferenceManyField,
} from "react-admin";
import { globalText } from "../../GlobalText";

const SimpleNoUserList = (props) => (
  <List {...props}>
    <SimpleList
      primaryText={(record) => record.title}
      secondaryText={(record) => `${record.views} views`}
      tertiaryText={(record) => new Date(record.createdAt).toLocaleDateString()}
    />
  </List>
);

const NoUserFilter = (props) => (
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

export default (props) => (
  <List {...props} filters={<NoUserFilter />}>
    <Datagrid rowClick="show">
      <TextField label={`${globalText.text_member} ID`} source="id" />
      <TextField label={globalText.text_username} source="username" />
      <EmailField label={globalText.text_email} source="email" />
      <TextField label={globalText.text_phone_num} source="phoneNum" />
      <TextField label={globalText.text_bio} source="bio" />
      <ReferenceManyField
        label={globalText.text_reserve}
        target="noUser.id"
        reference="Reservation"
      >
        <SingleFieldList>
          <ChipField source="id" />
        </SingleFieldList>
      </ReferenceManyField>
      <DateField
        showTime
        label={globalText.text_createdAt}
        source="createdAt"
      />
      <EditButton />
      <ShowButton />
    </Datagrid>
  </List>
);
