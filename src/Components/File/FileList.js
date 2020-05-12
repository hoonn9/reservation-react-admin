import React from "react";
import { useMediaQuery } from "@material-ui/core";
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  ShowButton,
  DateField,
  SimpleList,
  Filter,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { dateOptions } from "../../Utils";
import { globalText } from "../../GlobalText";
import MyUrlField from "../MyUrlField";

const FileFilter = (props) => (
  <Filter {...props}>
    <TextInput label={`${globalText.text_post} ID`} source="post.id" alwaysOn />
    <ReferenceInput
      label={globalText.text_room}
      source="room.id"
      reference="Room"
      allowEmpty
    >
      <SelectInput optionText="name" />
    </ReferenceInput>
    <ReferenceInput
      label={globalText.text_event}
      source="event.id"
      reference="Event"
      allowEmpty
    >
      <SelectInput optionText="title" />
    </ReferenceInput>
    <ReferenceInput
      label={globalText.text_popup}
      source="popup.id"
      reference="Popup"
      allowEmpty
    >
      <SelectInput optionText="id" />
    </ReferenceInput>
  </Filter>
);

export default (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <List {...props} filters={<FileFilter />}>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.id}
          secondaryText={(record) => record.url}
          tertiaryText={(record) =>
            new Date(record.createdAt).toLocaleDateString()
          }
        />
      ) : (
        <Datagrid>
          <TextField label={`${globalText.text_file} ID`} source="id" />
          <MyUrlField {...props} source="url" />
          <ReferenceField
            label={globalText.text_post}
            source="post.id"
            reference="Post"
          >
            <TextField source="id" />
          </ReferenceField>
          <ReferenceField
            label={globalText.text_room}
            source="room.id"
            reference="Room"
          >
            <TextField source="name" />
          </ReferenceField>

          <ReferenceField
            label={globalText.text_event}
            source="event.id"
            reference="Event"
          >
            <TextField source="id" />
          </ReferenceField>

          <ReferenceField
            label={globalText.text_popup}
            source="popup.id"
            reference="Popup"
          >
            <TextField source="id" />
          </ReferenceField>
          <DateField
            label={globalText.text_createdAt}
            options={dateOptions}
            source="createdAt"
          />
          <EditButton />
          <ShowButton />
        </Datagrid>
      )}
    </List>
  );
};
