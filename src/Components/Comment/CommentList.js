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
  Labeled,
} from "react-admin";
import { dateOptions } from "../../Utils";
import { globalText } from "../../GlobalText";
import MyUrlField from "../MyUrlField";

const SimpleFileList = (props) => (
  <List {...props}>
    <SimpleList
      primaryText={(record) => record.title}
      secondaryText={(record) => `${record.views} views`}
      tertiaryText={(record) => new Date(record.createdAt).toLocaleDateString()}
    />
  </List>
);

const FileFilter = (props) => (
  <Filter {...props}>
    <TextInput label={`${globalText.text_post} ID`} source="post.id" alwaysOn />
    <ReferenceInput
      alwaysOn
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
  </Filter>
);

export default (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <List {...props} filters={<FileFilter />}>
      {isSmall ? (
        <SimpleFileList {...props} />
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
